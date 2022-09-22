import styled from 'styled-components';
import { Form } from '../../types/types';
export const SForm = styled.form<Form>`

    justify-content: center;
    align-items: center;
    width: ${(Form) => Form.width || `98%`};
    padding: ${(Form) => Form.padding || 15}px;
    background-color: ${(Form) => Form.backgroundColor || `white`};
    border-radius: ${(Form) => Form.borderRadius || 10}px;
    margin: ${(Form) => Form.margin || 10}px;
    `