import React from 'react';
import Styled from 'styled-components';
import bgimg from '../../images/red-white-stripes.svg';

const Wrapper = props => <WrapperDiv>{props.children}</WrapperDiv>

export default Wrapper;

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
        border-image: url(${bgimg}) 30 stretch;
        border-image-width: 50px 50px 0px 50px;
        border-image-slice:100;
        
        `