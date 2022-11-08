import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import Router, { useRouter } from "next/router";
import { MedRegister } from "../../../src/components";
import { Prontuario } from "../../../src/types/types";
import { api } from "../../api/api";

export default function Paciente() {
  const router = useRouter();
  const param = router.query.id;

  return <MedRegister id={param} />;
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
