import styled from 'styled-components';
import { Input } from '../../../types/types'; 

export const SInput = styled.input<Input>`
    color: ${(Input) =>Input.color || '#2a2a2a'};
    width: ${(Input) => Input.width || `90%`};
    height: ${(Input) => Input.height || `auto`};
    border: ${(Input) => Input.border || `1px solid rgba(255,255,255, 0.25)`};
    border-radius: ${(Input) => Input.borderRadius || '5px'};
    font-size: ${(Input) => Input.fontSize || '1em'};
    background: ${(Input) => Input.background || '#e7e4e4'};
    border-bottom: ${(Input) => Input.borderBottom || `1px solid #ffffff`};
    padding: ${(Input) => Input.padding || '10px'};
    padding-bottom: ${(Input) =>Input.paddingBottom};
    padding-top: ${(Input) =>Input.paddingTop};
    padding-left: ${(Input) =>Input.paddingLeft};
    padding-right: ${(Input) =>Input.paddingRight};
    margin: ${(Input) => Input.margin || '10px 0px'};
    margin-top: ${(Input) =>Input.marginTop};
    margin-bottom: ${(Input) =>Input.marginBottom};
    margin-left: ${(Input) =>Input.marginLeft};
    margin-right: ${(Input) =>Input.marginRight};
    outline: none;

    /* width: 90%;
    padding: 10px;
    margin: 10px 0px;
    border: 1px solid rgba(255,255,255, 0.25);
    background: #e7e4e4;
    border-radius: 5px;
    outline: none;
    color: #2a2a2a;
    font-size: 1em; */
 
`;
