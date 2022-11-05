import vars from "../../variables";
import { Painel } from "../../../types/types";
import styled from "styled-components";
export const MainPainel = styled.div<Painel>`
    display: flex;
    width: ${(Painel) => Painel.width || `98%`};
    padding: ${(Painel) => Painel.padding || vars.smSpacing}px;
    background: ${(Painel) =>Painel.background || vars.white};
    border-radius: ${(Painel) =>Painel.borderRadius || vars.borderRadius}px;
    box-shadow: ${(Form) => Form.boxShadow || `0 0 20px 0 rgba(0,0,0,0.2)`};
    margin: ${(Painel) => Painel.margin || 10}px;
    min-height: ${(Painel) => Painel.minHeight || 0}px;
    justify-content: ${(Painel) => Painel.justifyContent};
    align-items: ${(Painel) => Painel.justifyContent};
    flex-direction: ${(Painel)=> Painel.flexDirection};
`;