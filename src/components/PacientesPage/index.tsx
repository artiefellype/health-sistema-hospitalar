import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { IoQrCode } from "react-icons/io5";
import { AiOutlineInfoCircle, AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import QRCode from "qrcode";
import Image from "next/image";
import { api } from "../../../pages/api/api";
import { DataType, Person } from "../../types/types";
import { Button, Title } from "..";
import Router from "next/router";
import moment from "moment";

//const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,email,nat,registered,picture&noinfo`;

export default function Pacientes() {
  const [open, setOpen] = useState(false);
  const data: DataType[] = [];
  const [list, setList] = useState<Person[]>([]);
  const [src, setSrc] = useState("");

  const goToRegister = () => {
    Router.push("/sistema/cadastrarPacientes");
  };

  function deletePatient(id: string) {
    api
      .delete(`paciente/${id}`)
      .then((response) => {
        console.log("DELETE", response.status);
      })
      .catch((error) => console.log("PACIENTES_ERROR@>", error));
  }

  const ActionIcons = (el: any) => {
    return (
      <>
        <Link href={`/sistema/paciente/${el.id}`}>
          <a
            style={{
              color: "#000",
              fontSize: "1rem",
              paddingLeft: "0.5rem",
            }}
          >
            <AiOutlineInfoCircle />
          </a>
        </Link>
        {/* <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => {
            deletePatient(el.id);
            Router.reload()
          }}
        >
          <AiFillDelete />
        </button> */}
      </>
    );
  };

  list.map((item, index) => {
    data.push({
      key: index,
      Id: item.id,
      Nome: item.name,
      DataEntrada: new Date(Date.now()).toLocaleString().split(" ")[0],
      Acoes: <ActionIcons id={item.id} />,
    });
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "Id",
    },
    {
      title: "Nome",
      dataIndex: "Nome",
    },
    {
      title: "Data de Entrada",
      dataIndex: "DataEntrada",
    },
    {
      title: "Ações",
      dataIndex: "Acoes",
    },
  ];

  useEffect(() => {
    api
      .get("paciente")
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => console.log("PACIENTES_ERROR@>", error));
  }, []);

  return (
    <div>
      <div
        style={{
          display: open ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 9999,
        }}
      >
        {/* <Image src={src} alt="QRCode" width={200} height={200} /> */}
      </div>
      <Title>Pacientes</Title>
      <Table columns={columns} dataSource={data} size="middle" />
      <Button
        width="200px"
        color="white"
        background="#0F4C75"
        onClick={goToRegister}
      >
        Novo
      </Button>
    </div>
  );
}
