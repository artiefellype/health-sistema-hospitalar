import styled from "styled-components";
import { Button } from "../../../types/types";
export const SButton = styled.button<Button>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(Button) => Button.width || "100px"};
    height: ${(Button) => Button.height || "35px"};
    border: ${(Button) => Button.border || "none"};
    border-radius: ${(Button) => Button.borderRadius || 5}px;
    padding: ${(Button) => Button.padding || `10px`};
    margin: ${(Button) => Button.margin || ` 20px 0`};
    font-size: ${(Button) => Button.fontSize || 15}px;
    font-family: ${(Button) => Button.fontFamily};
    color: ${(Button) => Button.color || "#333"};
    background: ${(Button) => Button.background || "#001529"};
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
        background: #001529;
    }
`