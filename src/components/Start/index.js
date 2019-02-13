import React from 'react';
import Styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Start() {

    const typeDirections = () => {
        const txt = 'Flip over any two cards and see if they match. You can only miss twice!';
        const speed = 50;
        let i = 0;
        if (i < txt.length) {
            document.getElementById("directions").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeDirections, speed);
        }
    }

    return <StartDiv>
        <div className="hero">
            <div className="text-box">
                <span className="directions">Flip over any two cards and see if they match. You can only miss twice!</span>
            </div>
            <Link to="/game" className={window.location.pathname === "/game"}><button className="start-button">START</button></Link>
        </div>
    </StartDiv>
};

const StartDiv = Styled.div`
    width:100%;
    height: 100%;
    margin-bottom: 45px;

    .hero {
        background-image: url(/images/Toad-house.png);
        background-size: contain;
        height: 80vh;
        width:70vw;
        background-position: center;
        background-repeat: no-repeat;
        margin: auto;
        margin-top: 10px;
        overflow: hidden;
    }

    .text-box {
        background-color: #ffcec6;
        border: solid black 5px;
        width: 50vw;
        height 10vh;
        margin:auto;
        margin-top: 50px;
        padding-top: 50px;
        padding-left: 20px;
        display:flex;
        justify-content: center;
        flex-direction: column;
        overflow: hidden;
    }
    span {
        font-family: 'Press Start 2P', cursive;
        font-size: 30px;
        margin:auto;
        margin-bottom: 50px;
    }

    a {
        text-decoration:none;
        color:orange;
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    .start-button {
        background-color:#e79c21;
        border-radius:25px;
        position: absolute;
        width:120px;
        height:50px;
        left:45vw;
        top: 36vh;
        text-align: center;
        font-size: 18px;
        color:white;
        font-family: 'Press Start 2P', cursive;
    }

    .start-button:hover {
        background-color: #ffcec6;
        cursor: pointer;
    }

`