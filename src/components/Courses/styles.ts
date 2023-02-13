import styled from "styled-components";

export const ContainerCourses = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    gap: 20px;
`;

export const Title = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    color: #636466;
    padding: 150px 0 0 0;
`;

export const GridCourses = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
`;

export const CourseBox = styled.a`
    display: flex;
    background-color: #fff;
    box-shadow: ${props => props.theme.colors.shadow};
    height: 500px;  
    border-radius: 10px;
    flex-direction: column;
    transition: all 0.3s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export const ContainerTexts = styled.div`
    display: flex;
    padding: 20px 30px;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
`;

export const BoxImage = styled.div`
    display: flex;
    height: 300px;
    background-color: #212121;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Image = styled.div`
    display: flex;
`;

export const CourseName = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #636466;
`;

export const SpecialistName = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #636466;
`;

