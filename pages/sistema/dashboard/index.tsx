import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Painel } from "../../../src/components";
import { Chart, Box, Title, Label } from "../../../src/components";
import vars from "../../../src/components/variables";
import { api } from "../../api/api";
import { parseCookies } from "nookies";
import { Person } from "../../../src/types/types";

export default function Dashboard() {
  const [list, setList] = useState<Person>();

  useEffect(() => {
    api
      .get("/paciente")
      .then((response) => setList(response.data))
      .catch((err) => console.log("dashboardERROR => ", err));
  }, []);

  let patientQuantity = 0
  if(list) patientQuantity= ((list as unknown) as string).length;

  return (
    <>
      <Box>
        <Painel
          minHeight={190}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title> Prontuarios emitidos</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              {patientQuantity}
            </Label>
          </Painel>
        </Painel>

        <Painel
          minHeight={190}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title> Pacientes internados</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              {patientQuantity - 2}
            </Label>
          </Painel>
        </Painel>

        <Painel
          minHeight={190}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Title> Leitos disponiveis</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              {3000 - patientQuantity}
            </Label>
          </Painel>
        </Painel>
      </Box>
      {/* <Painel
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Chart />
      </Painel> */}
    </>
  );
}

// VERIFICACAO DE TOKENS VIA SERVER-SIDE
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["health.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
