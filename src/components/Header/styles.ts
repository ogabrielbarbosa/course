import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BoxCollor = styled.div`
    display: flex;
    background-color: #ED4088;
    height: 20px;
`;

export const SubContainer = styled.div`
    display: flex;
    padding: 10px 10%;
    justify-content: space-between;
`;

export const ContainerAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const TextName = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #636466;
`;

export const Photo = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 100px;
`;
