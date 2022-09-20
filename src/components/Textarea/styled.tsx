import styled from "styled-components";
import { Textarea } from "../../types/types";
export const STextarea = styled.textarea<Textarea>`
    display: flex;
    width: ${(Textarea) => Textarea.width|| "100%"};
    height: ${(Textarea) => Textarea.height || "100px"};
    border: ${(Textarea) => Textarea.border || "1px solid #ddd"};
    border-radius: ${(Textarea) => Textarea.borderRadius || 5}px;
    padding: ${(Textarea) => Textarea.padding || `10px`};
    margin: ${(Textarea) => Textarea.margin || ` 20px 0`};
    resize: none;
    font-size: ${(Textarea) => Textarea.fontSize || 15}px;
    font-family: ${(Textarea) => Textarea.fontFamily};
    color: ${(Textarea) => Textarea.color || "#333"};
    background: ${(Textarea) => Textarea.background || "white"};
    &:focus {
        outline: none;
    }
`;