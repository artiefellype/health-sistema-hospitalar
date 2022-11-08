import { Collapse } from "antd";
import Image from "next/image";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { Label, Button } from "..";
import { api } from "../../../pages/api/api";
import { Person, Prontuario } from "../../types/types";

const QRCode = (props: any) => {
  const [paciente, setPaciente] = useState<Person>();
  const [prontuario, setProntuario] = useState<Prontuario>();
  const [src, setSrc] = useState<string>("");

  function generateQRCode() {
    
      if (prontuario) {
        if (
          !("qrcode" in (prontuario as unknown as Array<Prontuario>)) ||
          prontuario?.qrcode == null
        ) {
          api
            .get(`/prontuario/qrcode/${prontuario?.id}`)
            .then((response) => {
              console.log("==> OK QRC <==");
            })
            .catch((error) => console.log("PACIENTES QRCODE ERROR@>", error));
        }
      }

      Router.reload()

  }

  useEffect(() => {
    api
      .get(`/prontuario`)
      .then((response) => {
        response.data.map((el: Prontuario) => {
          if (el.paciente) {
            if (el.paciente.id == props.id || el.id == props.id) {
              setPaciente(el.paciente);
              setProntuario(el);
              setSrc(el.qrcode);
            }
          }
        });
      })
      .catch((error) => console.log("PACIENTES ESP_ERROR@>", error));
  }, []);

  return (
    <>
      {src ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Image src={src} alt="QRCode" width={200} height={200} />
        </div>
      ) : (
        <Button onClick={() => generateQRCode()} width="200px" color="white" background="#0F4C75">
          Gerar QRCode
        </Button>
      )}
    </>
  );
};

export default QRCode;
