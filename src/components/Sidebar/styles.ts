import styled from "styled-components";

export const Sidebar = styled.div`
    display: flex;
    width: 300px;
    position: fixed;
    height: 100vh;
    overflow: auto;
    background-color: #820036;
    padding: 10px 20px;
    justify-content: space-between;
    flex-direction: column;
`;

export const SubContainers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;

export const ContainerNav = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const Navigator = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 0px solid #fff;
    border-left: 5px solid #fff;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all 0.3s ease-in-out;

    .link{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding-left: 20px;
    }

    &:hover{
        background-color: #941F50;
        border-left: 5px solid #fff;
        border-radius: 5px;
    }
`;

export const TextNavigator = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`;

export const ContainerProgress = styled.div`
    display: flex;
    flex-direction: column;
    height: 10vh;
    justify-content: center;
    gap: 10px;
`;

export const ContainerPlataform = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const ContainerMenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const PlataformText = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #fff;
`;

export const SubText = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
`;

export const SubTextNav = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
`;

export const Photo = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 100px;
`;

export const Divider = styled.div`
    border-top: 1px solid #fff;
`;

export const BoxBorder = styled.div`
    display: flex;
    width: 100%;
    background-color: #000;
    border-radius: 100px;
`;

export const BoxProgresos = styled.div`
    height: 20px;
    width: 10%;
    background-color: #fff;
    border-radius: 100px;
`;
