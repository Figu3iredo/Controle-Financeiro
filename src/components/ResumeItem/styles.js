import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    min-width: 200px;

    @media (max-width: 750px) {
        min-width: 140px;
        padding: 12px 16px;

        p {
            font-size: 12px;
        }

        span {
            font-size: 20px;
        }

        svg {
            display: none;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 6px;

    svg {
        width: 22px;
        height: 22px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 16px;
    color: #555;
    margin: 0;
`;

export const Total = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #1a1a1a;
`;