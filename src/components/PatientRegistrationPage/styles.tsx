import styled from 'styled-components'

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
    display: flex;
    position: relative;
    pointer-events: none;
    font-size: 1em;
    font-weight: 600;
    color: #f5f5f5;
    text-transform: uppercase;
    
`