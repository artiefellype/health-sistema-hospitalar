import Router from "next/router";
import { useForm } from "react-hook-form";
import { Person, Prontuario } from "../../types/types";
import { LoginForm, LoginInputBox, LoginSpan, LoginInput,LoginSelect } from "./styles";
import { Button, Painel, Box } from "..";
import { api } from "../../../pages/api/api";
import { useEffect, useState } from "react";

const ProntuarioRegistrationPage = () => {
  const { register, handleSubmit } = useForm<Prontuario>();
  const [list, setList] = useState<Person[]>([]);
  // Para mensages de erro do backend melhor usar essa funcao pra tratar

  useEffect(() => {
    api
      .get("paciente")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log("PRONTUARIOS_ERROR@>", error));
  }, []);

  function handleRegisterRecord(data: Prontuario) {
    ((data.return as unknown) as string) == 'true' ? data.return = true : data.return = false
    api
      .post("prontuario", data)
      .then((response) => console.log("==> OK <=="))
      .catch((error) => console.log(error));

    Router.push("/sistema/pacientes");
    
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
              style={{ padding: "0 2.5%" }}
            >
                <LoginInputBox>
              <Box
                width="90%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <LoginSpan> Paciente </LoginSpan>
              </Box>
              <LoginSelect style={{width: "90%"}} {...register("paciente")} name="paciente" required >
                {list.map((element, index)=>{
                    return <option key={index} value={element.id}>{element.name}</option>
                })}
              </LoginSelect>
            </LoginInputBox>
            <LoginInputBox>
              <Box
                width="90%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <LoginSpan> Status </LoginSpan>
              </Box>
              <LoginSelect style={{width: "90%"}} {...register("status")} name="status" required >
                    <option  value="ativo">Ativo</option>
                    <option  value="inativo">Inativo</option>
              </LoginSelect>
            </LoginInputBox>
            </Box>
            
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              style={{ padding: "0 2.5%" }}
            >
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> Necessita de retorno </LoginSpan>
                </Box>
                <LoginInput
                  {...register("return")}
                  name="return"
                  type="checkbox"
                />
              </LoginInputBox>
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> Prioridade </LoginSpan>
                </Box>
                <LoginInput
                  {...register("priority")}
                  name="priority"
                  type="range"
                  min="1"
                  max="3"
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
                  <LoginSpan> Sintomas </LoginSpan>
                </Box>
                <LoginInput
                  {...register("symptoms")}
                  name="symptoms"
                  type="text"
                  placeholder="Ex: nausea, dores de cabeça"
                />
              </LoginInputBox>
            </Box>
            <LoginInputBox>
              <Box
                width="90%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <LoginSpan> Observações</LoginSpan>
              </Box>
              <LoginInput
                {...register("observation")}
                name="observation"
                type="text"
                placeholder="Observações"
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
              Cadastrar Prontuario
            </Button>
          </Box>
        </LoginForm>
      </Painel>
    </>
  );
};
ProntuarioRegistrationPage.displayName = "ProntuarioRegistrationPage";
export default ProntuarioRegistrationPage;
