import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { IoQrCode } from "react-icons/io5";
import { Box, Button, Input, Painel, Table, Title} from "../../src/components";
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
        <div>
            
            <Title color= {"#fff"}>
                Pacientes
            </Title>
            <Box margin={"0"}>
                <Input color={"gray"} borderRadius={15} placeholder={'Pesquisa'} type={'text'} height={"30px"} width={"200px"}/>
                
                <Button color={"white"} fontSize={"20px"} borderRadius={10} background={"#03506F"}>
                    <Link href="/cadastrarPacientes">
                        Cadastrar
                    </Link>   
                </Button>
            </Box>
            <Painel>
                <Table items = {items} icons = {icons}/>
            </Painel>
        </div>
    )
}