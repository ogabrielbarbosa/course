import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext } from 'styled-components';

import { ContainerClass, SubContainer, Player, ConteinerClasses, HeaderClasses, SubText, BodyClasses, BoxClasses } from './styles';

import { db } from '../../services/firebaseConnection';

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

interface Aulas {
    id: string;
    slug: string;
    titulo: string;
    url_video: string;
}

const Class: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const [aulas, setAulas] = useState<Aulas[]>([]);
    const [embed, setEmbed] = useState('');
    const [firstEmbed, setFirstEmbed] = useState('');

    const { nomeCurso, nomeModulo } = useParams();

    useEffect(() => {
        function loadClasses() {
            db.collection('cursos').where("slug", "==", nomeCurso).get().then(snapshot => {
                snapshot.docs[0].ref.collection('modulos').where("slug", "==", nomeModulo).get().then(snapshot2 => {
                    snapshot2.docs[0].ref.collection('aulas').orderBy("order", "asc").get().then(snap => {
                        const aulas: Aulas[] = [];
                        snap.forEach(doc => {
                            aulas.push({
                                id: doc.id,
                                slug: doc.data().slug,
                                titulo: doc.data().titulo,
                                url_video: doc.data().url_video
                            });
                        });
                        setAulas(aulas);
                        setFirstEmbed(aulas[0].url_video);
                    })
                })
            });
        }

        loadClasses();

    }, []);

    function changeURL(url_video: string) {
        setEmbed(url_video);
    }   
    
    return (
        <ContainerClass>
            <SubContainer>
                <Player src={embed === '' ? `https://www.youtube.com/embed/${firstEmbed}` : `https://www.youtube.com/embed/${embed}`} />
                <ConteinerClasses>
                    <HeaderClasses>
                        <SubText>
                            Modulo seiila
                        </SubText>
                    </HeaderClasses>
                    <BodyClasses>
                        {aulas.map((item) => {
                            return (
                                <BoxClasses onClick={() => changeURL(item.url_video)}>
                                    <SubText>
                                        {item.titulo}
                                    </SubText>
                                </BoxClasses>
                            )
                        })}

                    </BodyClasses>
                </ConteinerClasses>
            </SubContainer>
        </ContainerClass>
    );
}

export default Class;