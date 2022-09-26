import { Fieldset, Form, Input, Label, Painel, Textarea, Title, Button, Box, FormAnt } from "../../src/components";
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
            <Title color={"#064663"}>
                Cadastrar Pacientes
            </Title>
            
            <FormAnt/>
                
            
        </div>

    )
}