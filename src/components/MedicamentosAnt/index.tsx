import { Avatar, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { GiMedicines } from "react-icons/gi";
import { api } from "../../../pages/api/api";
import { Person, Prontuario } from "../../types/types";
import { Button } from "../";
import Router, { useRouter } from "next/router";

interface Med {
  nome: string;
  descricao: string;
  frequencia: string;
  data_inicio: string;
}

const MedicamentosAnt = (props: any) => {
  const router = useRouter();
  const param = router.query.id;

  const list: Med[] | undefined = [];

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
  function goToMedRegister() {
    Router.push(`/sistema/cadastrarMed/${prontuario?.id}`);
  }

  if (prontuario?.medication) {
    prontuario?.medication.map((med) => {
      list.push({
        nome: med.name,
        descricao: med.description,
        frequencia: `${med.frequency}/${med.frequency} hrs `,
        data_inicio: med.create_at,
      });
    });
  }

  return (
    <>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item 
          actions={[<a key="list-loadmore-edit">{item.frequencia}</a>, <a key="list-loadmore-more">{item.data_inicio}</a>]}>
            <List.Item.Meta
              avatar={<GiMedicines />}
              title={<a>{item.nome}</a>}
              description={item.descricao}
            />
            <div>Frequência</div>
          </List.Item>
        )}
      />

      <Button
        width="200px"
        color="white"
        background="#0F4C75"
        onClick={goToMedRegister}
      >
        Novo
      </Button>
    </>
  );
};
export default MedicamentosAnt;
