import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { IoQrCode } from "react-icons/io5";
import { TableAnt} from "../../src/components";
import { Icon, Item} from "../../src/types/types";

const items:Item[] = [
    {
        id: "1",
        nome: "João",
        dataEntrada: "01/01/2021",
        status: "Ativo"
    },
    {
        id: "2",
        nome: "Maria",
        dataEntrada: "01/01/2021",
        status: "Ativo"
    },
    {
        id: "3",
        nome: "José",
        dataEntrada: "01/01/2021",
        status: "Ativo"
    },
]

const icons:Icon[] = [
    {
        id: "1",
        label: "QRCode",
        icon: IoQrCode,
        url: "/"
    },
    {
        id: "2",
        label: "Editar",
        icon: AiFillEdit,
        url: "/"
    }
]

export default function Pacientes(){
    return(
        <TableAnt/>
    )
}