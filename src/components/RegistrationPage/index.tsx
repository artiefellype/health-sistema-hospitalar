import React from "react";
import Title from "../Title";
import { MdOutlineMedication } from "react-icons/md";
import Label from "../Label";
import Box from "../Box";
import { Container, LoginCard, LogoContainer } from "./styles";
import { Input, Button, Form, InputNumber } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: " is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

export default function index() {
  const onFinish = (values: any) => {
    console.log(values.user);
  };

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
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
              
                name={["user", "name"]}
                label="Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
              style={{color:"red"}}
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "password"]} label="Password">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "cpf"]} label="CPF">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "role"]} label="Cargo">
                <Input />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Box>
        </Box>
      </LoginCard>
    </Container>
  );
}
