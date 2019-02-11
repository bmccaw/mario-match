import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Card({
    handleClick,
    id,
    type,
    flipped,
    height,
    width,
}) {
    return (
        <CardDiv
            className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width,
                height,
            }}
            onClick={handleClick}
        >
            <div className='flipper'>
                <img
                    alt='card'
                    className={flipped ? 'front' : 'back'}
                    src={flipped ? `/images/${type}.png` : `/images/n-cardback.png`}/>
            </div>
        </CardDiv>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}


const CardDiv = Styled.div`
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