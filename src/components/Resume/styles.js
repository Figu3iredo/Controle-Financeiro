import { styled } from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 10;
    max-width: 1120px;
    width: 98%;
    margin: -90px auto 0;
    display: flex;
    gap: 24px;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 750px) {
        gap: 12px;
    }
`;