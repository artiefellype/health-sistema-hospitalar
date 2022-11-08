import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Person } from "../../types/types";
import { LoginForm, LoginInputBox, LoginSpan, LoginInput } from "./styles";
import { Button, Painel, Box } from "..";
import { api } from "../../../pages/api/api";
import { useEffect } from "react";

const PatientRegistrationPage = () => {
  const { register, handleSubmit } = useForm<Person>();

  // Para mensages de erro do backend melhor usar essa funcao pra tratar

  function handleRegisterPatient(data: Person) {
    data.allergies = (data.allergies as unknown as string).split(",");
    api
      .post("paciente", data)
      .then((response) => console.log("==> OK <=="))
      .catch((error) => console.log(error));

    Router.push("/sistema/pacientes");
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

              <LoginInput
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
              <LoginInput
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
              style={{ padding: "0 2.5%" }}
            >
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> Data de nascimento </LoginSpan>
                </Box>
                <LoginInput
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
                <LoginInput
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
              style={{ padding: "0 2.5%" }}
            >
              <LoginInputBox>
                <Box
                  width="90%"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <LoginSpan> CPF </LoginSpan>
                </Box>
                <LoginInput
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
                <LoginInput
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
              <LoginInput
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
              <LoginInput
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
              <LoginInput
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
              <LoginInput
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
              <LoginInput
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
              <LoginInput
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
          </Box>
        </LoginForm>
      </Painel>
    </>
  );
};
PatientRegistrationPage.displayName = "PatientRegistrationPage";
export default PatientRegistrationPage;
