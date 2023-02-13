import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #fff; 
    }

    html{
        scroll-behavior: smooth;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button, iframe{
        cursor: pointer;
        border: none;
    }

    *:focus {
        outline: none;
    }   

    .submenu{
        display: flex;
        flex-direction: column;
        background-color: #fff;
        position: fixed;
        top: 95px;
        right: 50px;
        width: 200px;
        height: 150px;
        box-shadow: ${props => props.theme.colors.shadow};
        opacity: 1;  
        transition: all 0.3s ease-in-out;
    }

    .submenu-close{
        display: flex;
        visibility: hidden;
        flex-direction: column;
        opacity: 0;
        background-color: #fff;
        position: fixed;
        top: 95px;
        right: 50px;
        width: 200px;
        height: 150px;
        transition: all 0.3s ease-in-out;
    }
`;