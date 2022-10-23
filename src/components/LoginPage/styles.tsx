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
`

export const LoginCard = styled.div`
    display: flex;
    margin: 0;
    height: 100vh;
    width: 42%;
    flex-direction: column;
    backdrop-filter: blur(2px) saturate(180%);
    -webkit-backdrop-filter: blur(2px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.71);
    border: 1px solid rgba(255, 255, 255, 0.125);
    transition: all ease-in .3s;

    @media (max-width: 768px) {
        width: 100%;
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

