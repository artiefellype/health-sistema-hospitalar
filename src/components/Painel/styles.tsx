import vars from "../variables";
import { Painel } from '../../types/types'; 
import styled from "styled-components";
export const MainPainel = styled.div<Painel>`
    
    width: ${(Painel) => Painel.width || `98%`};
    padding: ${(Painel) => Painel.padding || vars.smSpacing}px;
    background: ${(Painel) =>Painel.background || vars.white};
    border-radius: ${(Painel) =>Painel.borderRadius || vars.borderRadius}px;
    box-shadow: ${(Painel) =>Painel.boxShadow || `0px 0px 10px 0px vars.shadow`};
    margin: ${(Painel) => Painel.margin || 10}px;
`;