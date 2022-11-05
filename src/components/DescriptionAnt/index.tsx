import { Badge, Descriptions } from 'antd';
import React, { useEffect, useState } from 'react';
import { api } from '../../../pages/api/api';
import { Person } from '../../types/types';

interface Prontuario {
  status: string;
  observation: string;
  return: boolean;
  pacienteId: string;
  symptoms: string;
  Medication: any;
  Operation: any;
}

export default function App(props:any ){

  const [ paciente, setPaciente ] = useState<Person>()
  const [ prontuario, setProntuario ] = useState<Prontuario>()

  useEffect(() => {
    api
      .get(`paciente/${props.id}`)
      .then((response) => {
        //console.log("PACIENTE ESP: ", response.data)
        setPaciente(response.data)
        console.log("DATA PACIENTE ESP: ", paciente)
      })
      .catch((error) => console.log("PACIENTES ESP_ERROR@>", error));
  }, []);

  

 
  
  return (
    <Descriptions layout="vertical" bordered>
      <Descriptions.Item label="Nome">{paciente?.name}</Descriptions.Item>
      <Descriptions.Item label="Nome da Mãe">{paciente?.mother_name}</Descriptions.Item>
      <Descriptions.Item label="Status">
        <Badge status="processing" text="Ativo" />
      </Descriptions.Item>
      <Descriptions.Item label="Data de Admissão">20/10/2022</Descriptions.Item>
      <Descriptions.Item label="Email" span={2}>
        {paciente?.email}
      </Descriptions.Item>
      <Descriptions.Item label="Telefone">{paciente?.telephone}</Descriptions.Item>
      <Descriptions.Item label="Dieta" span={2}>Indefinido</Descriptions.Item>
      <Descriptions.Item label="Diagnostico:">
        {paciente?.observation}
      </Descriptions.Item>
    </Descriptions>
  );
  
} 
 App;