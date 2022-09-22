import { Box, Dropdown, Painel, Title } from "../../src/components";
import {IoMdArrowDropdown} from "react-icons/io";
import { useState } from "react";
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
            <Title color= {"#fff"}>
                Paciente
            </Title>
            <Painel>
                <Box>
                    <h1>Data de Admissão: 01/01/2021</h1>
                    <Box>
                        <h1>Dias Internado: 16 dias</h1>
                        <Dropdown OnClick={() => setOpen(!open)} open={open} icon={IoMdArrowDropdown} valor={Prioridade}>
                            <p>Prioridade</p>
                        </Dropdown>
                    </Box>
                </Box>

            </Painel>
        </div>
    )
}