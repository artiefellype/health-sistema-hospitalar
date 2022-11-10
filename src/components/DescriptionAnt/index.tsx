import { Badge, Descriptions } from "antd";
import React, { useEffect, useState } from "react";
import { api } from "../../../pages/api/api";
import { Medication, Operations, Person, Prontuario } from "../../types/types";
import { Button } from "..";
import Router from "next/router";

export default function App(props: any) {
  const [paciente, setPaciente] = useState<Person>();
  const [prontuario, setProntuario] = useState<Prontuario>();

  useEffect(() => {
    api
      .get(`/prontuario`)
      .then((response) => {
        response.data.map((el: Prontuario) => {
          if (el.paciente) {
            if (el.paciente.id == props.id || el.id == props.id) {
              setPaciente(el.paciente);
              setProntuario(el);
            }
          }
        });
      })
      .catch((error) => console.log("PACIENTES ESP_ERROR@>", error));
  }, []);

  function goToProntuarios() {
    Router.push(`/sistema/cadastrarProntuario/${prontuario?.id}`);
  }

  const goToRegister = () => {
    Router.push(`/sistema/cadastrarPacientes`);
  };

  return (
    <>
      {paciente ? (
        <>
          <Descriptions layout="vertical" bordered>
            <Descriptions.Item label="Nome">{paciente?.name}</Descriptions.Item>
            <Descriptions.Item label="Nome da Mãe">
              {paciente?.mother_name}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Badge
                status={prontuario?.status == "Ativo" ? "success" : "warning"}
                text={prontuario?.status}
              />
            </Descriptions.Item>
            <Descriptions.Item label="Email" span={2}>
              {paciente?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Telefone">
              {paciente?.telephone}
            </Descriptions.Item>
            <Descriptions.Item label="Observação">
              {prontuario?.observation}
            </Descriptions.Item>
          </Descriptions>

          {/* <Button
            width="200px"
            color="white"
            background="#0F4C75"
            onClick={goToRegister}
          >
            Edit
          </Button> */}
        </>
      ) : (
        <Button
          type="submit"
          width="200px"
          color="white"
          background="#0F4C75"
          onClick={goToProntuarios}
        >
          Criar um Prontuário
        </Button>
      )}
    </>
  );
}
App;
