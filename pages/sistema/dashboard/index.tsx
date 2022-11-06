import { GetServerSideProps } from "next";
import React, { useEffect } from "react";
import { Painel } from "../../../src/components";
import { Chart, Box, Title, Label } from "../../../src/components";
import vars from "../../../src/components/variables";
import { api } from "../../api/api";
import Home from "../../../src/components/Home";
import { parseCookies} from 'nookies'

export default function Dashboard() {

  // useEffect(()=>{
  //   api.get('/paciente').then((response) => console.log("OPA> ", response.data))
  // }, [])


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
                3000
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
                3000
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
                3000
              </Label>
            </Painel>
          </Painel>
        </Box>
        <Painel
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Chart />
        </Painel>
      </>
    
  );
}


// VERIFICACAO DE TOKENS VIA SERVER-SIDE
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {['health.token']: token } = parseCookies(ctx)

  if(!token){
    return{
      redirect:{
        destination:'/',
        permanent: false
      }
    }
  }
  return{
    props:{

    }
  }
}