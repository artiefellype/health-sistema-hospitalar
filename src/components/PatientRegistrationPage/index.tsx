import Router from "next/router";
import { useForm } from "react-hook-form";
import { Person } from "../../types/types";
import { LoginForm, LoginInputBox, LoginSpan} from "./styles";
import {Button, Painel, Box, Input} from "..";
import { api } from "../../../pages/api/api";

const PatientRegistrationPage = () => {
  const { register, handleSubmit } = useForm<Person>();

  function goToProntuarios() {
    Router.push("/cadastrarProntuario");
  }
  // Para mensages de erro do backend melhor usar essa funcao pra tratar
  function handleRegisterPatient(data: Person) {
    data.allergies =((data.allergies as unknown) as string).split(",")
    //console.log("DEPOIS@>>", data);
    api
      .post("paciente", data)
      .then((response) => console.log("RESPONSE=>", response.data))
      .catch((error) => console.log(error));

      Router.push("/pacientes");
  }

  return (
    <>
      <Painel background={"#064663"} padding={15}>
        <LoginForm onSubmit={handleSubmit(handleRegisterPatient)}>
          <Box
            width="95%"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop={45}
          >
            <LoginInputBox>
              <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Nome </LoginSpan>
              </Box>
              
              <Input
                {...register("name")}
                //defaultValue=""
                name="name"
                type="text"
                placeholder="Nome do paciente"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Nome da mãe </LoginSpan>
              </Box>
              <Input
                {...register("mother_name")}
                name="mother_name"
                type="text"
                placeholder="Nome da mãe do paciente"
              />
            </LoginInputBox>
            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              style={{padding: "0 2.5%"}}
            >
              <LoginInputBox>
              <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Data de nascimento </LoginSpan>
              </Box>
                <Input
                  {...register("birth_date")}
                  name="birth_date"
                  type="date"
                />
              </LoginInputBox>
              <LoginInputBox>
              <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Contato </LoginSpan>
              </Box>
                <Input
                  {...register("telephone")}
                  name="telephone"
                  type="tel"
                  placeholder="Ex: (99) 99999-9999"
                />
              </LoginInputBox>
            </Box>

            <Box
              width="100%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              style={{padding: "0 2.5%"}}
            >
              <LoginInputBox>
              <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> CPF </LoginSpan>
              </Box>
                <Input
                  {...register("cpf")}
                  name="cpf"
                  type="text"
                  placeholder="Ex: xxx.xxx.xxx-xx"
                />
              </LoginInputBox>
              <LoginInputBox>
              <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> RG </LoginSpan>
              </Box>
                <Input
                  {...register("rg")}
                  name="rg"
                  type="text"
                  placeholder="Ex: xxx.xxx.xxx-xx"
                />
              </LoginInputBox>
            </Box>

            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Email </LoginSpan>
              </Box>
              <Input
                {...register("email")}
                name="email"
                type="email"
                placeholder="Ex: example@gmail.com"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Endereço </LoginSpan>
              </Box>
              <Input
                {...register("address")}
                name="address"
                type="text"
                placeholder="Ex: Av. João Goulart"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Tipo sanguíneo </LoginSpan>
              </Box>
              <Input
                {...register("bloodType")}
                name="bloodType"
                type="text"
                placeholder="Ex: A+"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Alergias </LoginSpan>
              </Box>
              <Input
                {...register("allergies")}
                name="allergies"
                type="text"
                placeholder="Ex: Pelo de animal, Poeira, Frutos do mar"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Contato de emergência </LoginSpan>
              </Box>
              <Input
                {...register("emergencyContacts")}
                name="emergencyContacts"
                type="tel"
                placeholder="Ex: (99) 99999-9999"
              />
            </LoginInputBox>
            <LoginInputBox>
            <Box
              width="90%"
              justifyContent="flex-start"
              alignItems="flex-start"
              >
              <LoginSpan> Observações </LoginSpan>
              </Box>
              <Input
                {...register("observation")}
                name="observation"
                type="text"
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
              Cadastrar Paciente
            </Button>
            <Button
              width="200px"
              color="white"
              background="#0F4C75"
              onClick={goToProntuarios}
            >
              Cadastro de Prontuario
            </Button>
          </Box>
        </LoginForm>
      </Painel>
    </>
  );
};
PatientRegistrationPage.displayName = "PatientRegistrationPage";
export default PatientRegistrationPage;
