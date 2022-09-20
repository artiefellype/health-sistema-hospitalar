import styled from "styled-components";


export const SFieldset = styled.fieldset`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;
    width: 100%;
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;