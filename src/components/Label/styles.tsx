import styled from 'styled-components';
import { Label } from '../../types/types'; 

export const SLabel = styled.label<Label>`
    display: flex;
    color: ${(Label) =>Label.color || 'black'};
    width: ${(Label) => Label.width};
    height: ${(Label) => Label.height || `30px`};
    border: ${(Label) => Label.border || `none`};
    border-radius: ${(Label) => Label.borderRadius || 3}px;
    font-size: ${(Label) => Label.fontSize || 15}px;
    background: ${(Label) => Label.background || 'white'};
    padding: ${(Label) => Label.padding}px;
    padding-bottom: ${(Label) =>Label.paddingBottom}px;
    padding-top: ${(Label) =>Label.paddingTop}px;
    padding-left: ${(Label) =>Label.paddingLeft}px;
    padding-right: ${(Label) =>Label.paddingRight}px;
    margin: ${(Label) => Label.margin}px;
    margin-top: ${(Label) =>Label.marginTop}px;
    margin-bottom: ${(Label) =>Label.marginBottom}px;
    margin-left: ${(Label) =>Label.marginLeft}px;
    margin-right: ${(Label) =>Label.marginRight}px;
`
export const SCelula = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

