import React, { useContext, useEffect } from "react";
import { MdOutlineMedication } from "react-icons/md";
import {
  Container,
  LoginCard,
  LogoContainer,
  LoginForm,
  LoginInput,
  LoginSpan,
  LoginInputBox,
  RegisterButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthContext";
import Router from "next/router";
import {Button, Box, Title} from "..";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormValues>();
  /* Utilizando contexto do componente api */
  const { signIn } = useContext(AuthContext);

  function goToRegister() {
    Router.push("/cadastro");
  }
  // Para mensages de erro do backend melhor usar essa funcao pra tratar
  async function handleSignIn(data: FormValues) {
    //console.log("@>>", data);
    await signIn(data);
  }
  return (
    <Container imgUrl="/img/loginImagePr.png">
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
            <Title fontSize={34} color="white" fontWeight={500} margin={-1}>
              Bem vindo de volta
            </Title>
            <Title
              fontSize={16}
              color="white"
              fontWeight={200}
              paddingBottom={0.5}
            >
              Por favor insira suas credenciais
            </Title>
          </Box>
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
                  {...register("email")}
                  defaultValue=""
                  name="email"
                  type="text"
                  required
                />
                <LoginSpan> EMAIL </LoginSpan>
              </LoginInputBox>
              <LoginInputBox>
                <LoginInput
                  {...register("password")}
                  name="password"
                  type="password"
                  required
                />
                <LoginSpan> SENHA </LoginSpan>
              </LoginInputBox>
              <RegisterButton onClick={goToRegister}>
                {" "}
                Nao possui conta? cadastre-se
              </RegisterButton>
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
            </Box>
          </LoginForm>
        </Box>
      </LoginCard>
    </Container>
  );
}
