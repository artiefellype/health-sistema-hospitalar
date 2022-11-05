import React, { useState } from "react";
import {Title, Box, Button} from "..";
import { MdOutlineMedication } from "react-icons/md";
import {
  Container,
  LoginCard,
  LogoContainer,
  LoginForm,
  LoginInput,
  LoginInputBox,
  LoginSpan,
  LoginButton
} from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../../pages/api/api";
import Router from 'next/router';

interface FormValuesT {
  name: string;
  email: string;
  password: string;
  cpf: string;
  role: string;
}

export default function RegistrationPage() {
  const [dataa, setData] = useState<FormValuesT[]>([]);
  const { register, handleSubmit } = useForm<FormValuesT>();
  // Para mensages de erro do backend melhor usar essa funcao pra tratar
  async function handleSignIn(data: FormValuesT) {
    //console.log("@>>", data);
    api
      .post("/user", data)
      .then((response) => console.log("OK"))
      .catch((error) => console.log("@>>>>", error));

    Router.push('/')

  }

  function goToLogin(){
    Router.push('/')
  }

  return (
    <Container imgUrl="/img/loginImageSc.png">
      <LoginCard>
        <LogoContainer>
          <MdOutlineMedication
            size={65}
            style={{
              color: "white",
            }}
          />
          <Title fontSize={35} color="white">
            {" "}
            HEALTH.
          </Title>
        </LogoContainer>
        <Box
          margin={0}
          height="100vh"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box margin={0} flexDirection="column" alignItems="center">
            <Title fontSize={30} color="white" fontWeight={500} margin={-1}>
              Crie uma nova conta
            </Title>
            <Title
              fontSize={16}
              color="white"
              fontWeight={200}
              paddingBottom={0.5}
            >
              Insira seus dados
            </Title>
          </Box>
          <Box
            margin={0}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <LoginForm onSubmit={handleSubmit(handleSignIn)}>
              <Box
                width="75%"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                paddingTop={45}
              >
                <LoginInputBox>
                  <LoginInput
                    {...register("name")}
                    defaultValue=""
                    name="name"
                    type="name"
                    required
                  />
                  <LoginSpan> Nome </LoginSpan>
                </LoginInputBox>
                <LoginInputBox>
                  <LoginInput
                    {...register("email")}
                    name="email"
                    type="email"
                    required
                  />
                  <LoginSpan> Email </LoginSpan>
                </LoginInputBox>
                <LoginInputBox>
                  <LoginInput
                    {...register("password")}
                    name="password"
                    type="password"
                    required
                  />
                  <LoginSpan> Senha </LoginSpan>
                </LoginInputBox>
                <LoginInputBox>
                  <LoginInput
                    {...register("cpf")}
                    name="cpf"
                    type="cpf"
                    required
                  />
                  <LoginSpan> CPF </LoginSpan>
                </LoginInputBox>
                <LoginInputBox>
                  <LoginInput
                    {...register("role")}
                    name="role"
                    type="role"
                    required
                  />
                  <LoginSpan> Cargo </LoginSpan>
                </LoginInputBox>
              </Box>
              <Box
                width="100%"
                margin={0}
                flexDirection="column"
                alignItems="center"
                paddingTop={45}
              >
                <Button
                  type="submit"
                  width="250px"
                  color="white"
                  background="#0F4C75"
                >
                  Continue
                </Button>
                <LoginButton onClick={goToLogin}>Ja possui uma conta? Entre aqui</LoginButton>  
              </Box>
              
            </LoginForm>
          </Box>
        </Box>
      </LoginCard>
    </Container>
  );
}
