import { Input, Painel, Title } from "../../src/components";

export default function CadastrarPacientes(){
    return(
        <div>
            <Title>
                Cadastrar Pacientes
            </Title>
            <Painel>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome'} type={'text'} width = {"98%"} marginBottom = {20}/>
            </Painel>
        </div>

    )
}