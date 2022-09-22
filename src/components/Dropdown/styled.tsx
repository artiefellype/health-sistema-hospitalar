import styled from 'styled-components';

export const SDropdown = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #03506F;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    height: 30px;
    outline: none;
    padding: 0 20px;
    transition: all 0.3s ease;
    width: 140px;
    border: none;
    p{
        margin: 5px;
    }
    
`;
export const SContent = styled.div`
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100px;
    p{
        margin: 5px;
    }   
    hover{
        background: #03506F;
        color: #fff;
    }
    
`;