import React, { useState, useEffect } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Card from './components/Card';
import initializeDeck from './deck';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    background-color: ${props => (props.blackColor ? 'black' : 'white')};
  }`

export default function App () {

  const [cards, setCards] = useState([])

  const [flipped, setFlipped] = useState([])

  useEffect(() =>  {
    setCards(initializeDeck ())
  }, [])

  const handleClick = (id) => setFlipped([...flipped, id])

    return (
      <div className="App">
        <GlobalStyle blackColor />
        <Wrapper
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}>
        </Wrapper>
        <Footer />
      </div>
    );
};
