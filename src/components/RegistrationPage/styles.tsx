import styled from "styled-components";
import { Login } from "../../types/types";



export const Container = styled.div<Login>`
    background-image: url(${(Login) => Login.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const LoginCard = styled.div`
    display: flex;
    margin: 0;
    height: 80vh;
    width: 50%;
    flex-direction: column;
    backdrop-filter: blur(2px) saturate(180%);
    -webkit-backdrop-filter: blur(2px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.71);
    border: 1px solid rgba(255, 255, 255, 0.125);
    transition: all ease-in .3s;

    @media (max-width: 768px) {
        width: 100%;
        height: 100vh;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15px;
    width: 100%;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`
export const LoginInputBox = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`



export const LoginInput = styled.input`
    width: 90%;
    padding: 10px;
    margin: 10px 0px;
    border: 1px solid rgba(255,255,255, 0.25);
    background: #e7e4e4;
    border-radius: 5px;
    outline: none;
    color: #2a2a2a;
    font-size: 1em;



`

export const LoginSpan = styled.span`
    position: absolute;
    left: 0;
    padding: 8%;
    pointer-events: none;
    font-size: 1em;
    color: #6b6868;
    text-transform: uppercase;
    transition: 0.5s ease-out;
    border-radius: 40px;
    
    ${LoginInput}:focus ~ & {
        color: #1a1818;
        transform: translateX(30px) translateY(-22px);
        font-size: 0.65em;
        padding: 0 10px;
        //border-left: 1px solid #1a1818;;
        //border-right: 1px solid #1a1818;;
        letter-spacing: 0.2em;
        background-color: #e7e4e4;
        border-radius: 10px;
    }

    ${LoginInput}:valid ~ & {
        color: #1a1818;
        transform: translateX(30px) translateY(-22px);
        font-size: 0.65em;
        padding: 0 10px;
        //border-left: 1px solid #1a1818;;
        //border-right: 1px solid #1a1818;;
        letter-spacing: 0.2em;
        background-color: #e7e4e4;
        border-radius: 10px;
    }
    
`

export const LoginButton = styled.button`
    background: transparent;
    height: 20px;
    width: 100%;
    display: flex;
    border: none;
    color: #f1ebeb;
    cursor: pointer;
    justify-content: center;

    &:hover{
        color: #146fac;
    }
`



