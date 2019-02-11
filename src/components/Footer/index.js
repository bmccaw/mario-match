import React from 'react';
import Styled from 'styled-components';

const Footer = props => <FooterDiv>
    <div className="hud"></div>
    <div className="box1"></div>
    <div className="box2"></div>
    <div className="box3"></div>
    </FooterDiv>

export default Footer;

const FooterDiv = Styled.div `
        display: grid;
        grid-template-columns: 65vw 8vw 8vw 8vw
        grid-template-areas: "hud box1 box2 box3";
        grid-gap:20px;
        width: 95vw;
        height: 100px;
        
        margin:auto;
        font-family: 'Press Start 2P', cursive;

        .hud {
            grid-area: hud;
            background-color:#9fd8c8;
        border: 2px solid black;
        box-shadow: 0 0 0pt 5pt white;
        border-radius: 10px;
        
        }
        .box1 {
            grid-area: box1;
            background-color:#9fd8c8;
        border: 2px solid black;
        box-shadow: 0 0 0pt 5pt white;
        border-radius: 10px;
        
        }
        .box2 {
            grid-area: box2;
            background-color:#9fd8c8;
        border: 2px solid black;
        box-shadow: 0 0 0pt 5pt white;
        border-radius: 10px;
        }
        .box3 {
            grid-area: box3;
            background-color:#9fd8c8;
        border: 2px solid black;
        box-shadow: 0 0 0pt 5pt white;
        border-radius: 10px;
        }
        `