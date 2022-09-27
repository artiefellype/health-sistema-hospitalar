import React from "react";
import { Painel } from "../../src/components";
import { Chart, Box, Title, Label } from "../../src/components";
import vars from "../../src/components/variables";

export default function Dashboard() {
  return (
    <>
      <Box>
        <Painel>
          <Title> Prontuarios emitidos</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              3000
            </Label>
          </Painel>
        </Painel>

        <Painel>
          <Title> Pacientes internados</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              3000
            </Label>
          </Painel>
        </Painel>

        <Painel>
          <Title> Leitos disponiveis</Title>
          <Painel background={vars.text}>
            <Label
              justifyContent={"center"}
              background={vars.text}
              color={"white"}
            >
              3000
            </Label>
          </Painel>
        </Painel>
      </Box>
      <Painel>
        <Chart />
      </Painel>
    </>
  );
}