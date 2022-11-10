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

export const LoginSelect = styled.select`
    /* styling */
  background-color: white;
  border: thin solid blue;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;

  &:focus{
    background-image:
    linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;
  }

  &:-moz-focusring{
    color: transparent;
    text-shadow: 0 0 0 #000;
  }


`