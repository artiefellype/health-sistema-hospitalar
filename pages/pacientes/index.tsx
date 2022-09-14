import { AiFillEdit } from "react-icons/ai";
import { IoQrCode } from "react-icons/io5";
import { Painel, Table, Title} from "../../src/components";
import { Icon, Item, TitleH1} from "../../src/types/types";

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
        url: "/qrcode"
    },
    {
        id: "2",
        label: "Editar",
        icon: AiFillEdit,
        url: "/editar"
    }
]
const TitleH1:TitleH1 = {
    color: "#fff",
    font: "Poppins",
    margin: 0,
    padding: 0
}

export default function Pacientes(){
    return(
        <div>
            <Title TitleH1={TitleH1}>
                Pacientes
            </Title>
        
            <Painel>
                <Table items = {items} icons = {icons}/>
            </Painel>
        </div>
    )
}