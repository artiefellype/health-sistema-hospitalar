import Router from "next/router";
import { useForm } from "react-hook-form";
import { Medication, Operations, Prontuario } from "../../types/types";
import { LoginForm, LoginInputBox, LoginSpan, LoginInput } from "./styles";
import { Button, Painel, Box } from "..";
import { api } from "../../../pages/api/api";
import { useEffect, useState } from "react";

const ExameRegistrationPage = (props: any) => {
  const { register, handleSubmit } = useForm<Operations>();
  const [list, setList] = useState<Prontuario[]>([]);
  let idDePaciente:string;
  // Para mensages de erro do backend melhor usar essa funcao pra tratar

  useEffect(() => {
    api
      .get("prontuario")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log("PRONTUARIOS_ERROR@>", error));
  }, []);

  list.map((element)=>{
    if(!element.paciente) return
    if(element.id == props.id){
      idDePaciente = element.paciente.id;
    }
  })
  function handleRegisterRecord(data: Operations) {

    api
      .post(`prontuario/addOperation/${props.id}`, data)
      .then((response) => {
        console.log("==> OK <==")
      })
      .catch((error) => console.log(error));
    Router.push(`/sistema/paciente/${idDePaciente}`);
    
  }

  return (
    <>
      <Painel background={"#064663"} padding={15}>
        <LoginForm onSubmit={handleSubmit(handleRegisterRecord)}>
          <Box
            width="95%"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop={45}
          >
            
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> Exame </LoginSpan>
                </Box>
                <LoginInput
                  {...register("name")}
                  name="name"
                  type="text"
                  required
                />
              </LoginInputBox>
            </Box>

            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> Resultado</LoginSpan>
                </Box>
                <LoginInput
                  {...register("result")}
                  name="result"
                  type="text"
                  min="0"
                  required
                />
              </LoginInputBox>
            </Box>
            <LoginInputBox>
              <Box
                width="90%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <LoginSpan> Data de atuação </LoginSpan>
              </Box>
              <LoginInput
                {...register("dateTimeOfAplication")}
                name="dateTimeOfAplication"
                type="date"
                required
              />
            </LoginInputBox>
            
          </Box>
          <Box
            width="100%"
            margin={0}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            paddingTop={45}
          >
            <Button
              type="submit"
              width="200px"
              color="white"
              background="#0F4C75"
            >
              Cadastrar Exame
            </Button>
          </Box>
        </LoginForm>
      </Painel>
    </>
  );
};
ExameRegistrationPage.displayName = "ExameRegistrationPage";
export default ExameRegistrationPage;
