import React from 'react';
import Styled from 'styled-components';

const Footer = props => <FooterDiv>
    <div className="hud"><img className="box-icon" alt="hud" src="/images/mario_hud.png" /></div>
    <div className="box1"><img className="box-icon" alt="star" src="/images/star_bar.png" /></div>
    <div className="box2"><img className="box-icon" alt="star" src="/images/star_bar.png" /></div>
    <div className="box3"></div>
    </FooterDiv>

export default Footer;

const FooterDiv = Styled.div `
        display: grid;
        grid-template-columns: 60vw 1fr 8vw 8vw 8vw
        grid-template-areas: "hud . box1 box2 box3";
        grid-gap:20px;
        width: 95vw;
        height: 100px;
        margin:auto;
        text-align: center;

        .hud {
            grid-area: hud;
            background-color:#afe8e2;
            border: 2px solid black;
            box-shadow: 0 0 0pt 5pt white;
            border-radius: 10px;
        
        }
        .box1 {
            grid-area: box1;
            background-color:#afe8e2;
            border: 2px solid black;
            box-shadow: 0 0 0pt 5pt white;
            border-radius: 10px;

        }
        .box2 {
            grid-area: box2;
            background-color:#afe8e2;
            border: 2px solid black;
            box-shadow: 0 0 0pt 5pt white;
            border-radius: 10px;
        }
        .box-icon {
            max-width: 100%;
            max-height: 100%;
        }
        .box3 {
            grid-area: box3;
            background-color:#afe8e2;
            border: 2px solid black;
            box-shadow: 0 0 0pt 5pt white;
            border-radius: 10px;
        }
        `