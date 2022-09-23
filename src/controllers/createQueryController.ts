import { Request, Response } from "express";

import { CreateQueryUseCase } from "../useCases/createQueryUseCase";

const createQueryUseCase = new CreateQueryUseCase()

export class CreateQueryController {
  constructor() {}

  handle(req: Request, res: Response) {
    const {
      patient_name,
      patient_cpf,
      clinic,
      occupation_area,
      doctor_name,
      doctor_crm,
      consultation_fee,
      date_appointment,
    } = req.body;

    const response = createQueryUseCase.create({
      patient_name,
      patient_cpf,
      clinic,
      occupation_area,
      doctor_name,
      doctor_crm,
      consultation_fee,
      date_appointment,
    });

    return res.status(201).json({ query: response });
  }
}
