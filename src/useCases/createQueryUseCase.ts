import { v4 as uuidV4 } from "uuid";

import { QueryModel } from "../domain/models/queryModel";
import { CreateQueryData, CreateQuery } from '../domain/models/useCases/createQuery';

export class CreateQueryUseCase implements CreateQuery {
  private readonly queries: QueryModel[]
  constructor() {
    this.queries = [];
  }

  create({
    patient_name,
    patient_cpf,
    clinic,
    occupation_area,
    doctor_name,
    doctor_crm,
    consultation_fee,
    date_appointment,
  }: CreateQueryData): QueryModel {

    const query = Object.assign({}, {
      id: uuidV4(),
      patient_name,
      patient_cpf,
      clinic,
      occupation_area,
      doctor_name,
      doctor_crm,
      consultation_fee,
      date_appointment,
      created_at: new Date()
    });

    this.queries.push(query);
    console.log(this.queries)

    return query
  }
}
