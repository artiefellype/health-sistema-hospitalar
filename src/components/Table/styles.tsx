
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import vars from "../variables";

export const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border-radius: ${vars.borderRadius}px;
    overflow: hidden;
`;
export const STHeadTR = styled.tr`
    background-color:${vars.white};
`;
export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
`;
export const STH = styled.th`
    font-weight: normal;
    border:none;
    font-family: "Poppins", sans-serif;
    padding: ${vars.smSpacing}px;
    color: ${vars.teste};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-bottom: 1px solid #064663;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    
    background-color: ${vars.white};
`;

export const STD = styled.td`
    color: ${vars.white};
    padding: ${vars.smSpacing}px;
    border:none;
    :not(:last-of-type) {
        border-top: 1px solid #064663;
    }
    font-size: 14px;
`;
export const STDIcon = styled.td`
    max-width: 20px;
    border: 1px solid #064663;
    font-size: 14px;
    border:none;
    border-top: 1px solid #064663;
`;
export const STHIcon = styled.th`
    font-weight: normal;
    font-family: "Poppins", sans-serif;
    padding: ${vars.smSpacing}px;
    color: ${vars.white};
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    border:none;
    :not(:last-of-type) {
        border-bottom: 1px solid #064663;
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;
export const SA= styled.a`
    color: ${vars.white};
`;
