import {Typography} from "antd";
import { Box, Painel, Title } from "../../../src/components";

export default function Medicamento(){
    return(
        <div>
            <Title color= {"#064663"}>
                Medicamentos
            </Title>
            <Painel padding = {20} background={"#064663"} color={"#fff"}>
                <Box backgroundColor={"#fff"} padding={15}>
                    <Typography.Text style={{
                        fontSize: 18,
                        fontWeight: 700,
                    }}>EPINEFRINA 1mg/mL ampola 1mL – sol.injetável</Typography.Text>
                    <Typography.Text 
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >Frequência</Typography.Text>
                    <Typography.Text
                        style={{
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                    >8/8 h</Typography.Text>
                </Box> 
            </Painel>
        </div>
    )
}