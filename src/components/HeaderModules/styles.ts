import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: auto;
    background-color: #fff;
    margin-left: 300px;
`;

export const BoxCollor = styled.div`
    display: flex;
    background-color: #ED4088;
    height: 20px;
`;

export const SubContainer = styled.div`
    display: flex;
    padding: 10px 50px;
    justify-content: space-between;
`;

export const ContainerAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TextName = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #636466;
`;

export const ButtonArrow = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover{
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const Navigator = styled.div`
    display: flex;
    background-color: #fff;
    right: 0;
    width: 200px;
    height: 50px;
    align-items: center;
    padding-left: 15px;
`;

export const TextNavigator = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000;
    margin-left: 20px;
`;