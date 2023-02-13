import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from 'styled-components';

import { ContainerCourses, Title, GridCourses, CourseBox, BoxImage, ContainerTexts, Image, CourseName, SpecialistName } from './styles';

import { db } from '../../services/firebaseConnection';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

interface Props {
    toggleTheme(): void;
}

interface Cursos {
    id: string;
    especialista: string;
    slug: string;
}


const Courses: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const [cursos, setCursos] = useState<Cursos[]>([]);

    useEffect(() => {
        db.collection('cursos').get().then(snapshot => {
            const cursos: Cursos[] = [];
            snapshot.forEach(doc => {
                cursos.push({
                    id: doc.id,
                    especialista: doc.data().especialista,
                    slug: doc.data().slug,
                });
            });
            setCursos(cursos);
        })
    }, []);



    return (
        <ContainerCourses>
            <Title>Seus Cursos</Title>
            <GridCourses>
                {cursos.map((item) => {
                    return (
                        <Link to={"/" + item.slug}>
                            <CourseBox key={item.id} data-aos="zoom-in">
                                <BoxImage>
                                    <Image />
                                </BoxImage>

                                <ContainerTexts>
                                    <CourseName>{item.id}</CourseName>
                                    <SpecialistName>{item.especialista}</SpecialistName>
                                </ContainerTexts>
                            </CourseBox>
                        </Link>
                    )
                })}
            </GridCourses>
        </ContainerCourses>
    );
}

export default Courses;