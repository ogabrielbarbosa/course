import styled from "styled-components";

export const ContainerCourses = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 300px;
`;

export const ImageBackground = styled.div`
    display: flex;
    flex-direction: column;
    height: 400px;
    background-color: #D9D9D9;
`;

export const SubContainerCourses = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    background-color: #D9D9D9;
    gap: 20px;
`;

export const Title = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #636466;
    margin-left: 10px;
`;

export const Modules = styled.div`
    display: flex;
    cursor: grab;
    overflow: hidden;
`;

export const SubModules = styled.div`
    display: flex;
    gap: 20px;
    padding: 10px;
`;

export const CourseBox = styled.a`
    display: flex;
    background-color: #fff;
    box-shadow: ${props => props.theme.colors.shadow};
    height: 500px;  
    width: 300px;
    border-radius: 10px;
    flex-direction: row;
    align-items: flex-end;
    transition: all 0.3s ease-in-out;

    &:hover .my__unique__button__class-asdf123{
        opacity: 1;
    }
`;

export const ModuleTitle = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #fff;
`;

export const SubTexts = styled.div`
    display: flex;
    opacity: 0;
    background-color: #820036;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: center;
    transition: all 1s ease-in-out;

    -webkit-transition: opacity 0.3s ease-in;
       -moz-transition: opacity 0.3s ease-in;
        -ms-transition: opacity 0.3s ease-in;
         -o-transition: opacity 0.3s ease-in;
            transition: opacity 0.3s ease-in;
`;