import Router from "next/router";
import { useForm } from "react-hook-form";
import { Medication, Person, Prontuario } from "../../types/types";
import { LoginForm, LoginInputBox, LoginSpan, LoginInput,LoginSelect } from "./styles";
import { Button, Painel, Box } from "..";
import { api } from "../../../pages/api/api";
import { useEffect, useState } from "react";

const MedRegistrationPage = (props: any) => {
  const { register, handleSubmit } = useForm<Medication>();
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

  function handleRegisterRecord(data: Medication) {

    data.create_at = new Date(Date.now()).toLocaleString().split(" ")[0]
    data.frequency = Number(data.frequency)
    
    api
      .post(`prontuario/addMedication/${props.id}`, data)
      .then((response) => console.log("==> OK <=="))
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
                  <LoginSpan> Medicamento </LoginSpan>
                </Box>
                <LoginInput
                  {...register("name")}
                  name="name"
                  type="text"
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
                  <LoginSpan> frequência /h</LoginSpan>
                </Box>
                <LoginInput
                  {...register("frequency")}
                  name="frequency"
                  type="number"
                  min="0"
                />
              </LoginInputBox>
            </Box>
            <LoginInputBox>
              <Box
                width="90%"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <LoginSpan> Descrição </LoginSpan>
              </Box>
              <LoginInput
                {...register("description")}
                name="description"
                type="text"
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
              Cadastrar Medicamento
            </Button>
          </Box>
        </LoginForm>
      </Painel>
    </>
  );
};
MedRegistrationPage.displayName = "MedRegistrationPage";
export default MedRegistrationPage;
