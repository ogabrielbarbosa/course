import styled from "styled-components";

export const ContainerPoliticas = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 20%;
    gap: 20px;

    @media screen and (max-width: 1200px){
        padding: 5% 10%;
    }
`;

export const Title = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #000;
`;

export const SubTitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #000;
`;

export const Paragrafh = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000;
    text-align: justify;
    hyphens: auto;
    word-spacing: -0.05em;
`;

export const List = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000;
`;

export const TextLi = styled.li`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000;
    margin-left: 20px;
`;