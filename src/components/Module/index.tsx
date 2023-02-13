import React, { useContext, useEffect, useState, useRef } from 'react';

import { ThemeContext } from 'styled-components';

import { ContainerCourses, ImageBackground, SubContainerCourses, Title, Modules, SubModules, CourseBox, SubTexts, ModuleTitle } from './styles';

import { db } from '../../services/firebaseConnection';

import { motion } from 'framer-motion';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

interface Props {
    toggleTheme(): void;
}

interface Modulos {
    id: string;
    titulo: string;
    slug: string;
}

const Module: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const [modulos, setModulos] = useState<Modulos[]>([]);
    const { nomeCurso } = useParams();

    const carousel = useRef<HTMLDivElement>(null);
    const scrollWidth = carousel.current?.offsetWidth;

    useEffect(() => {
        db.collection('cursos').where("slug", "==", nomeCurso).get().then(snapshot => {
            snapshot.docs[0].ref.collection('modulos').orderBy("order", "asc").get().then(snap => {
                const modulos: Modulos[] = [];
                snap.forEach(doc => {
                    modulos.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        slug: doc.data().slug
                    });
                });
                setModulos(modulos);
            })
        })
        
        console.log(scrollWidth);
    }, []);

    
    return (
        <ContainerCourses as={motion.div}>
            <ImageBackground as={motion.div} />
            <SubContainerCourses as={motion.div}>
                <Title>{nomeCurso}</Title>
                <Modules as={motion.div}  >
                    <SubModules ref={carousel} as={motion.div} drag="x" dragConstraints={{right: 0, left: scrollWidth}} whileTap={{ cursor: "grabbing" }}>
                        {modulos.map((item) => {
                            return (
                                <Link to={"/" + nomeCurso + "/" + item.slug}>
                                    <CourseBox as={motion.div} key={item.id} data-aos="zoom-in">
                                        <SubTexts className='my__unique__button__class-asdf123'>
                                            <ModuleTitle>{item.titulo}</ModuleTitle>
                                        </SubTexts>
                                    </CourseBox>
                                </Link>
                            )
                        })}
                    </SubModules>
                </Modules>
            </SubContainerCourses>
        </ContainerCourses>
    );
}

export default Module;