import { Fieldset, Form, Input, Label, Painel, Textarea, Title, Button } from "../../src/components";
import { SCelula } from "../../src/components/Label/styles";

export default function CadastrarPacientes(){
    const Alergias = [
        "Dermatite atópica",
        "Dermatite de contato",
        "Dermatite seborreica",
        "Dermatite alérgica",
        "Alergia Alimentar",
        "Alergia a Insetos",
        "Alergia a Pelos de Animais",
    ]
    return(
        <div>
            <Title color={"white"}>
                Cadastrar Pacientes
            </Title>
            
            <Form>
                <Input color={"gray"} placeholder={'Nome do Paciente'} type={'text'} width = {"100%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Nome da Mãe'} type={'text'} width = {"100%"} marginBottom = {20}/>
                <Input color={"gray"} placeholder={'Idade'} type={'number'} width = {"90px"} marginBottom = {20}/>
                <Input color={"gray"} type={'date'} width = {"150px"} marginBottom = {20}/>
                <p>Alergias</p>
                <Fieldset>
                    {Alergias.map((item, index) => {
                        return(
                            <SCelula key={index}>
                                <Input type="checkbox" width={"15px"} margin = {5} />
                                <Label height={"25px"} color={"gray"}>
                                    {item}
                                </Label>
                            </SCelula>
                        )
                    })
                    }
                    <Input color={"gray"} placeholder={'Outro:'} type={'text'} borderBottom={"none"}/>
                </Fieldset>
                <Textarea placeholder={"Principais Sintomas"}/>
                <Textarea placeholder={"Admissão"} height={"75px"}/>
                <Textarea placeholder={"APP(antecedentes pessoais patologicos) Ex: HAS, DM2, Hipotiroidismo, medicação psiquiatricas"} height={"150px"}/>
                <Button color={"white"} fontSize={"20px"} borderRadius={10} margin={"20px 0"}>
                    Cadastrar
                </Button>

            </Form>
                
            
        </div>

    )
}