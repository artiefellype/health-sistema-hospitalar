import {
  DescriptionAnt,
  ExameAnt,
  MedicamentosAnt,
} from "../../src/components";

import { Tabs } from "antd";
import React from "react";
import Home from "../../src/components/Home";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

const onChange = (key: string) => {
  console.log(key);
};

export default function Paciente() {

  const router = useRouter();
  const param = router.query.id;

  //console.log("@PARAMETRO>>", param)

  return (
    <Home>
      <Tabs
        type="card"
        defaultActiveKey="1"
        onChange={onChange}
        items={[
          {
            label: `Paciente`,
            key: "1",
            children: (
              <div>
                <DescriptionAnt id={param}/>
              </div>
            ),
          },
          {
            label: `Medicação`,
            key: "2",
            children: <MedicamentosAnt id={param}/>,
          },
          {
            label: `Exames`,
            key: "3",
            children: <ExameAnt id={param}/>,
          },
        ]}
      />
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
