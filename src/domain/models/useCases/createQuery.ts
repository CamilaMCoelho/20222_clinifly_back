export interface CreateQueryData {
    patient_name: string;
    patient_cpf: string;
    clinic: string;
    occupation_area: string;
    doctor_name: string;
    doctor_crm: number;
    consultation_fee: string;
    date_appointment: Date;  
}

export interface CreateQuery {
  create: (query: CreateQueryData) => void
}
