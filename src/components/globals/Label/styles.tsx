import styled from 'styled-components';
import { Label } from '../../../types/types';

export const SLabel = styled.label<Label>`
    display: flex;
    color: ${(Label) =>Label.color || 'black'};
    width: ${(Label) => Label.width};
    height: ${(Label) => Label.height || `30px`};
    border: ${(Label) => Label.border || `none`};
    border-radius: ${(Label) => Label.borderRadius || 3}px;
    font-size: ${(Label) => Label.fontSize || 15}px;
    font-weight: ${(Label) => Label.fontWeight};
    background: ${(Label) => Label.background || 'white'};
    padding: ${(Label) => Label.padding || 0}px;
    padding-bottom: ${(Label) =>Label.paddingBottom || 0}px;
    padding-top: ${(Label) =>Label.paddingTop || 0}px;
    padding-left: ${(Label) =>Label.paddingLeft || 0}px;
    padding-right: ${(Label) =>Label.paddingRight || 0}px;
    margin: ${(Label) => Label.margin || 0}px;
    margin-top: ${(Label) =>Label.marginTop || 0}px;
    margin-bottom: ${(Label) =>Label.marginBottom || 0}px;
    margin-left: ${(Label) =>Label.marginLeft || 0}px;
    margin-right: ${(Label) =>Label.marginRight || 0}px;
`
export const SCelula = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

