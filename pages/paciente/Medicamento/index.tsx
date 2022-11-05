import { Typography } from "antd";
import { GetServerSideProps } from "next";
import { Box, Painel, Title } from "../../../src/components";
import Home from "../../../src/components/Home";
import { parseCookies } from "nookies";

export default function Medicamento() {
  return (
    <Home>
      <div>
        <Title color={"#064663"}>Medicamentos</Title>
      </div>
    </Home>
  );
}

// VERIFICACAO DE TOKENS VIA SERVER-SIDE
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["health.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
