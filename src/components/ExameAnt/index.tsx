import { Collapse } from "antd";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Label, Button } from "..";
import { api } from "../../../pages/api/api";
import { Person, Prontuario } from "../../types/types";

const { Panel } = Collapse;

const Exame = (props: any) => {
  const onChange = (key: string | string[]) => {
    console.log("@>>", key);
  };

  const genExtra = (element: string) => <Label> {element} </Label>;

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
  console.log(prontuario?.operations);
  function goToExamRegister() {
    Router.push(`/sistema/cadastrarExame/${prontuario?.id}`);
  }

  return (
    <>
      {prontuario?.operations && (
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          {prontuario?.operations.map((op, index) => {
            return (
              <Panel
                header={op.name}
                key={index}
                extra={genExtra(op.professionalName)}
              >
                <p>{op.result}</p>
              </Panel>
            );
          })}
        </Collapse>
      )}

      <Button
        type="submit"
        width="200px"
        color="white"
        background="#0F4C75"
        onClick={goToExamRegister}
      >
        Novo
      </Button>
    </>
  );
};

export default Exame;
