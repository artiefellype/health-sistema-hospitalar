import styled, {css} from 'styled-components';
import { Input } from '../../types/types'; 

export const SInput = styled.input<Input>`
    display:block;
    color: ${(Input) =>Input.color || 'white'};
    width: ${(Input) => Input.width || `100%`};
    height: ${(Input) => Input.height || `30px`};
    border: ${(Input) => Input.border || `none`};
    border-radius: ${(Input) => Input.borderRadius}px;
    font-size: ${(Input) => Input.fontSize || 15}px;
    background: ${(Input) => Input.background || '#064663'};
    border-bottom: ${(Input) => Input.borderBottom || `1px solid #ffffff`};
    padding: ${(Input) => Input.padding || 8}px;
    padding-bottom: ${(Input) =>Input.paddingBottom}px;
    padding-top: ${(Input) =>Input.paddingTop}px;
    padding-left: ${(Input) =>Input.paddingLeft}px;
    padding-right: ${(Input) =>Input.paddingRight}px;
    margin: ${(Input) => Input.margin}px;
    margin-top: ${(Input) =>Input.marginTop}px;
    margin-bottom: ${(Input) =>Input.marginBottom}px;
    margin-left: ${(Input) =>Input.marginLeft}px;
    margin-right: ${(Input) =>Input.marginRight}px;
    &::placeholder {
        color: ${(Input) =>Input.color || 'white'};
    }

 
`;
