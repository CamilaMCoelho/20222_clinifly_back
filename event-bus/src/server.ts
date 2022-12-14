import type { NextFunction, Request, Response } from "express";
import express from "express";
import axios from "axios";
import cors from "cors";

type EventType =
  | "appointmentCreated"
  | "appointmentGet"
  | "patientCreated"
  | "patientAuth"
  | "doctorList";

interface EventQueue {
  type: EventType;
  data: any;
}

type ErrorType =
  | "PATIENT_CPF_EXISTING"
  | "PATIENT_EMAIL_EXISTING"
  | "PATIENT_ID_NOT_EXISTING"
  | "PATIENT_CPF_NOT_EXISTING"
  | "E-MAIL_OR_PASSWORD_INCORRECT";

const app = express();
app.use(express.json());
app.use(cors())

const eventQueue: EventQueue[] = [];

app.get("/eventos", (req: Request, res: Response) => {
  res.send(eventQueue);
});

app.post("/eventos", async (req: Request, res: Response) => {
  const event: EventQueue = req.body;
  const queries = req.query

  switch (event.type) {
    case "patientCreated":
      try {
        const response = await axios.post(
          "http://localhost:3333/patients",
          event.data
        );
        res.status(response.status).json(event.data);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status as number).json({
            error: (error.response?.data as { error: ErrorType }).error,
          });
        } else {
          res
            .status(404)
            .send({ error: "Microsserviço de paciente fora do ar" });
        }
      }
      break;
    case "patientAuth":
      try {
        const response = await axios.post(
          "http://localhost:3333/auth",
          event.data
        );
        res.status(response.status).json(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status as number).json({
            error: (error.response?.data as { error: ErrorType }).error,
          });
        } else {
          res
            .status(404)
            .send({ error: "Microsserviço de paciente fora do ar" });
        }
      }
      break;
    case "appointmentCreated":
      try {
        const response = await axios.post(
          "http://localhost:4000/appointment",
          event.data
        );
        res.status(response.status).json(event.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status as number).json({
            error: (error.response?.data as { error: ErrorType }).error,
          });
        } else {
          res
            .status(404)
            .json({ error: "Microsserviço de consulta fora do ar" });
        }
      }
      break;
    case "appointmentGet":
      try {
        const response = await axios.get(`http://localhost:4000/appointment?id=${queries.id}`);
        res.status(response.status).json(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status as number).json({
            error: (error.response?.data as { error: ErrorType }).error,
          });
        } else {
          res
            .status(404)
            .json({ error: "Microsserviço de consulta fora do ar" });
        }
      }
      break;
    case 'doctorList':
      try {
        const response = await axios.get('http://localhost:4000/doctors')
        res.status(response.status).json(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          res.status(error.response?.status as number).json({
            error: (error.response?.data as { error: any }).error,
          });
        } else {
          res
            .status(404)
            .json({ error: "Microsserviço de consulta fora do ar" });
        }
      }
      break;
    default:
      res.status(500).send({ error: "Erro interno do servidor" });
      break;
  }

  eventQueue.push(event);
});

app.listen(10000, () => {
  console.log("Barramento de eventos. Porta 10000");
});
