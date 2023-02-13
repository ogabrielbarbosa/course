import React, { useContext, useCallback } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import Typewriter from 'typewriter-effect';

import { Sidebar, SubContainers, ContainerProgress, ContainerNav, Navigator, ContainerPlataform, SubTextNav, ContainerMenuFooter, Photo, PlataformText, SubText, Divider, BoxBorder, BoxProgresos, TextNavigator } from './styles';

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

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    const { nomeCurso } = useParams();

    return (
        <Sidebar>
            <SubContainers>
                <ContainerProgress>
                    <SubText>Seu progresso</SubText>
                    <BoxBorder>
                        <BoxProgresos />
                    </BoxBorder>
                </ContainerProgress>

                <ContainerNav>
                    <Navigator>
                        <Link to={'/' + nomeCurso} className='link'>
                            <AiOutlineHome size={30} color='#fff' />
                            <TextNavigator>Home</TextNavigator>
                        </Link>
                    </Navigator>
                    <Navigator>
                        <Link to={'/account'} className='link'>
                            <AiOutlineUser size={30} color='#fff' />
                            <TextNavigator>Minha conta</TextNavigator>
                        </Link>
                    </Navigator>
                </ContainerNav>
            </SubContainers>

            <SubContainers>
                <ContainerMenuFooter>
                    <Link to={'/suport'}>
                        <SubTextNav>Suporte para Alunos</SubTextNav>
                    </Link>
                    <Link to={'/termosdeuso'}>
                        <SubTextNav>Termos de uso</SubTextNav>
                    </Link>
                    <Link to={'/politicadeprivacidade'}>
                        <SubTextNav>Politicas de Privacidade</SubTextNav>
                    </Link>
                </ContainerMenuFooter>
                <Divider />
                <ContainerPlataform>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <circle cx="27" cy="27" r="26" fill="#ED4088" stroke="black" stroke-width="2" />
                        <circle cx="27" cy="27" r="19.75" fill="white" stroke="black" stroke-width="2" />
                        <path d="M25.4375 37.9375C25.4375 37.0746 26.1371 36.375 27 36.375C27.8629 36.375 28.5625 37.0746 28.5625 37.9375V41.0625C28.5625 41.9254 27.8629 42.625 27 42.625C26.1371 42.625 25.4375 41.9254 25.4375 41.0625V37.9375Z" fill="black" />
                        <path d="M26.375 31.375C26.375 31.0298 26.6548 30.75 27 30.75C27.3452 30.75 27.625 31.0298 27.625 31.375V32.625C27.625 32.9702 27.3452 33.25 27 33.25C26.6548 33.25 26.375 32.9702 26.375 32.625V31.375Z" fill="black" />
                        <path d="M37.9375 28.5625C37.0746 28.5625 36.375 27.8629 36.375 27C36.375 26.1371 37.0746 25.4375 37.9375 25.4375H41.0625C41.9254 25.4375 42.625 26.1371 42.625 27C42.625 27.8629 41.9254 28.5625 41.0625 28.5625H37.9375Z" fill="black" />
                        <path d="M31.375 27.625C31.0298 27.625 30.75 27.3452 30.75 27C30.75 26.6548 31.0298 26.375 31.375 26.375H32.625C32.9702 26.375 33.25 26.6548 33.25 27C33.25 27.3452 32.9702 27.625 32.625 27.625H31.375Z" fill="black" />
                        <path d="M33.6291 36.1172C33.0189 35.507 33.0189 34.5177 33.6291 33.9075C34.2393 33.2973 35.2286 33.2973 35.8388 33.9075L38.0485 36.1172C38.6587 36.7274 38.6587 37.7168 38.0485 38.327C37.4383 38.9371 36.449 38.9371 35.8388 38.327L33.6291 36.1172Z" fill="black" />
                        <path d="M29.6517 30.6469C29.4076 30.4028 29.4076 30.0071 29.6517 29.763C29.8957 29.5189 30.2915 29.5189 30.5355 29.763L31.4194 30.6469C31.6635 30.891 31.6635 31.2867 31.4194 31.5308C31.1753 31.7749 30.7796 31.7749 30.5355 31.5308L29.6517 30.6469Z" fill="black" />
                        <path d="M18.4396 33.9075C19.0498 33.2973 20.0391 33.2973 20.6493 33.9075C21.2595 34.5177 21.2595 35.507 20.6493 36.1172L18.4396 38.3269C17.8294 38.9371 16.8401 38.9371 16.2299 38.3269C15.6197 37.7167 15.6197 36.7274 16.2299 36.1172L18.4396 33.9075Z" fill="black" />
                        <path d="M23.5758 29.763C23.8199 29.5189 24.2156 29.5189 24.4597 29.763C24.7038 30.0071 24.7038 30.4028 24.4597 30.6469L23.5758 31.5308C23.3317 31.7748 22.936 31.7748 22.6919 31.5308C22.4479 31.2867 22.4479 30.8909 22.6919 30.6469L23.5758 29.763Z" fill="black" />
                        <path d="M25.4375 12.9375C25.4375 12.0746 26.1371 11.375 27 11.375C27.8629 11.375 28.5625 12.0746 28.5625 12.9375V16.0625C28.5625 16.9254 27.8629 17.625 27 17.625C26.1371 17.625 25.4375 16.9254 25.4375 16.0625V12.9375Z" fill="black" />
                        <path d="M26.375 21.375C26.375 21.0298 26.6548 20.75 27 20.75C27.3452 20.75 27.625 21.0298 27.625 21.375V22.625C27.625 22.9702 27.3452 23.25 27 23.25C26.6548 23.25 26.375 22.9702 26.375 22.625V21.375Z" fill="black" />
                        <path d="M12.9375 28.5625C12.0746 28.5625 11.375 27.8629 11.375 27C11.375 26.1371 12.0746 25.4375 12.9375 25.4375H16.0625C16.9254 25.4375 17.625 26.1371 17.625 27C17.625 27.8629 16.9254 28.5625 16.0625 28.5625H12.9375Z" fill="black" />
                        <path d="M21.375 27.625C21.0298 27.625 20.75 27.3452 20.75 27C20.75 26.6548 21.0298 26.375 21.375 26.375H22.625C22.9702 26.375 23.25 26.6548 23.25 27C23.25 27.3452 22.9702 27.625 22.625 27.625H21.375Z" fill="black" />
                        <path d="M15.9515 18.4396C15.3413 17.8294 15.3413 16.8401 15.9515 16.2299C16.5617 15.6197 17.551 15.6197 18.1612 16.2299L20.3709 18.4396C20.9811 19.0498 20.9811 20.0391 20.3709 20.6493C19.7607 21.2595 18.7714 21.2595 18.1612 20.6493L15.9515 18.4396Z" fill="black" />
                        <path d="M22.5806 23.5759C22.3365 23.3318 22.3365 22.936 22.5806 22.692C22.8247 22.4479 23.2204 22.4479 23.4645 22.692L24.3484 23.5759C24.5924 23.8199 24.5924 24.2157 24.3484 24.4597C24.1043 24.7038 23.7085 24.7038 23.4645 24.4597L22.5806 23.5759Z" fill="black" />
                        <path d="M36.1172 16.2299C36.7274 15.6197 37.7167 15.6197 38.3269 16.2299C38.9371 16.84 38.9371 17.8294 38.3269 18.4396L36.1172 20.6493C35.507 21.2595 34.5176 21.2595 33.9075 20.6493C33.2973 20.0391 33.2973 19.0498 33.9075 18.4396L36.1172 16.2299Z" fill="black" />
                        <path d="M30.6469 22.6919C30.8909 22.4479 31.2867 22.4479 31.5307 22.6919C31.7748 22.936 31.7748 23.3317 31.5307 23.5758L30.6469 24.4597C30.4028 24.7038 30.0071 24.7038 29.763 24.4597C29.5189 24.2156 29.5189 23.8199 29.763 23.5758L30.6469 22.6919Z" fill="black" />
                    </svg>
                    <PlataformText>Plataforma</PlataformText>
                </ContainerPlataform>
            </SubContainers>
        </Sidebar>
    );
}

export default Presentation;