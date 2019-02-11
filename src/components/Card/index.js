import React from 'react';
import Styled from 'styled-components';

const Card = props => (
    <CardDiv onClick={() => props.flipCard(props.id)}>
        <img alt= {props.name} src={props.back} data-id={props.id}/>
    </CardDiv>
);

export default Card;

const CardDiv = Styled.div `
        width:100px;
        height:auto
        margin:auto;
        margin-top: 30px;
        margin-bottom: 20px;
        border: solid 4px black;
        
        &:hover {
            border:solid 4px #e79c21;
            box-shadow:0 0 10px 8px #e79c21;
        }

        img {
            width: 100%;
            height: 100%;
        }
        `