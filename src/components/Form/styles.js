import { styled } from "styled-components";

export const Container = styled.div`
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #ccc;
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;

    display: flex;
    gap: 20px;
    justify-content: space-around;
    align-items: center;

    background-color: #fff;

    @media (max-width: 750px) {
        display: grid;
        gap: 15px;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 5px;
`;

export const input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    
      
    
    input {
        margin-left: 15px;
        margin-top: -4px;
        margin-right: 5px;
        accent-color: black;
        
    }
`;

export const Button = styled.button`
    padding: 15px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    color: #fff;
    background-color: teal;

    font-weight: bold;

    &:hover {
        opacity: 0.9;
    }
`;