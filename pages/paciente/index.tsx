import { Box, DescriptionAnt, Dropdown, Painel, Title } from "../../src/components";
import {IoMdArrowDropdown} from "react-icons/io";
import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
export default function Paciente(){
    const [open, setOpen] = useState(true);
    const Prioridade = [
        {
            id: "1",
            label: "Baixa",
            value: "Baixa"
        },
        {
            id: "2",
            label: "Média",
            value: "Média"
        },
        {
            id: "3",
            label: "Alta",
            value: "Alta"
        },
    ]
    return(
        <div>
            <Title color= {"#064663"}>
                Paciente
            </Title>
            <Painel padding = {20} background={"#064663"} color={"#fff"}>
               <DescriptionAnt/>
            </Painel>
            <Box justifyContent={"space-evenly"}>
                <Button
                    type="primary"
                    style={{
                        background: "#064663",
                        border: "none",
                        borderRadius: 5,
                        color: "#fff",
                    }}
                >
                    <Link href="paciente/Medicamento">
                        Medicação
                    </Link>
                </Button>
                <Button
                    type="primary"
                    style={{
                        background: "#064663",
                        border: "none",
                        borderRadius: 5,
                        color: "#fff",
                    }}
                >
                    <Link href="paciente/Exame">
                        Exames
                    </Link>
                </Button>
            </Box>
        </div>
    )
}