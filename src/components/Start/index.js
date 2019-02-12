import React from 'react';
import Styled from 'styled-components';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Start() {
    return <StartDiv>
        <div className="hero">
            <button className="start-button"><Link to="/game" className={window.location.pathname === "/game"}>Start Game</Link></button>
        </div>
    </StartDiv>
};

const StartDiv = Styled.div`
    width:100%;
    height: 100%; 
    margin-bottom: 30px;

    .hero {
        background-image: url(/images/Toad-house.png);
        background-size: contain;
        height: 80vh;
        width:70vw;
        background-position: center;
        background-repeat: no-repeat;
        margin: auto;
        margin-top: 10px;
    }

    .start-button {
        margin:auto;
    }

`