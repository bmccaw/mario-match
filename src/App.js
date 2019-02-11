import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import initializeDeck from './deck';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    background-color: ${props => (props.blackColor ? 'black' : 'white')};
  }`

export default function App () {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled,setDisabled] = useState(false)

  useEffect(() =>  {
    setCards(initializeDeck ())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  const handleClick = (id) => { 
    setDisabled(true)
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(flipped,id)) return
      setFlipped([flipped[0],id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 2000)
      }
    } 
  }

  const preloadImages = () => {
    cards.map((card) => {
      const src = `/images/${card.type}.png`
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped ([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type ===clickedCard.type
  }

    return (
      <div className="App">
        <GlobalStyle blackColor />
        <Wrapper
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          >
        </Wrapper>
        <Footer />
      </div>
    );
};
