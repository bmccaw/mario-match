import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '../Card';

export default function Wrapper ({ disabled, cards, flipped, solved, handleClick}) {
        return <WrapperDiv className="Wrapper">
                {cards.map( card => (
                        <Card 
                        key={card.id}
                        id={card.id}
                        type={card.type}
                        flipped={flipped.includes(card.id)}
                        solved={solved.includes(card.id)}
                        handleClick = {handleClick}
                        disabled={disabled || solved.includes(card.id)}
                      />
                ))}
        </WrapperDiv>
};

Wrapper.propTypes = {
        disabled: PropTypes.bool.isRequired,
        cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
        solved: PropTypes.arrayOf(PropTypes.number).isRequired,
        handleClick: PropTypes.func.isRequired
}

const WrapperDiv = Styled.div `
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(6, 1fr);
        max-width: 100%;
        margin:auto;
        margin-bottom:50px;
        background-color:black;
        border: 50px solid;
        border-bottom: none;
        border-image: url('/images/red-white-stripes.svg') 30 stretch;
        border-image-width: 50px 50px 0px 50px;
        border-image-slice:100;

        
        `