import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { IoQrCode } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import QRCode from "qrcode";
import Image from "next/image";
import { api } from "../../../pages/api/api";
import { Person } from "../../types/types";
import {Button, Title} from "..";
import Router from "next/router";
import moment from "moment";

interface DataType {
  key: React.Key;
  Id: string;
  Nome?: string;
  DataEntrada: string;
  Status: string;
  Acoes: any;
}

//const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,email,nat,registered,picture&noinfo`;

export default function Pacientes() {
  const [open, setOpen] = useState(false);
  const data: DataType[] = [];
  const [list, setList] = useState<Person[]>([]);
  const [src, setSrc] = useState("");

  const goToRegister = () => {
    Router.push("cadastrarPacientes");
  };

  const ActionIcons = (el: any) => {
    //console.log("@>>>>>>>>>>", el.id);
    return (
      <>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={() => 
            setOpen(!open)}
            onBlur={()=>setOpen(false)}
        >
          
          <IoQrCode />
        </button>
        <Link href={`/paciente/${el.id}`}>
          <a
            style={{
              color: "#000",
              fontSize: "1rem",
              paddingLeft: "0.5rem",
            }}
          >
            <AiFillEdit />
          </a>
        </Link>
      </>
    );
  };

  list.map((item, index) => {
    data.push({
      key: index,
      Id: item.id,
      Nome: item.name,
      DataEntrada: moment(item.birth_date).format('DD/MM/YYYY'),
      Status: "Ativo",
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
      title: "Status",
      dataIndex: "Status",
    },
    {
      title: "Ações",
      dataIndex: "Acoes",
    },
  ];

  useEffect(() => {
    QRCode.toDataURL(
      "https://health-sistema-hospitalar-vczy.vercel.app/paciente"
    ).then((url: any) => {
      setSrc(url);
    });
  }, []);

  useEffect(() => {
    api
      .get("paciente")
      .then((response) => {
        setList(response.data);
        console.log("LISTA: ", list);
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
        <Image src={src} alt="QRCode" width={200} height={200} />
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
