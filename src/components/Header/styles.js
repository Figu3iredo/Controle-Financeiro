import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 130px;
    padding-bottom: 60px;
    text-align: center;
    background-color: teal;
`;

export const Header = styled.div`
    width: 100%;
`;

export const Title = styled.h1`
    padding-top: 24px;
    margin: 0;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: 700;
`;