import React from "react";
import Title from "../Title";
import { MdOutlineMedication } from "react-icons/md";
import Label from "../Label";
import Box from "../Box";
import Button from "../Button";
import { Container, LoginCard, LogoContainer } from "./styles";
import { Input } from "antd";

export default function index() {
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
          <Box
            width="75%"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            paddingTop={45}
          >
            <Label
              fontWeight={700}
              fontSize={12}
              color="white"
              background="transparent"
              paddingTop={12}
            >
              Email
            </Label>
            <Input bordered={true} placeholder="Insira seu email" />
            <Label
              fontWeight={700}
              fontSize={12}
              color="white"
              background="transparent"
              paddingTop={12}
            >
              Senha
            </Label>
            <Input.Password bordered={true} placeholder="Insira sua senha" />
          </Box>
          <Box
            width="100%"
            margin={0}
            flexDirection="column"
            alignItems="center"
            paddingTop={45}
          >
            <Button width="250px" color="white" background="#0F4C75">
              Sign in
            </Button>
          </Box>
        </Box>
      </LoginCard>
    </Container>
  );
}
