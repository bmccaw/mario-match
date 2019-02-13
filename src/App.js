import React, { useState, useEffect } from 'react';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Start from './components/Start';
import initializeDeck from './deck';
import { createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-color: ${props => (props.blackColor ? 'black' : 'white')};
  }`

export default function App() {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  const handleClick = (id) => {
    setDisabled(true)
    flipAudio.play()
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (sameCardClicked(flipped, id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        setTimeout(() => { matchAudio.play(); }, 400)
        resetCards()
      } else {
        setTimeout(() => { noMatchAudio.play(); }, 400)
        setTimeout(resetCards, 1000)
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
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id)
    const flippedCard = cards.find(card => flipped[0] === card.id)
    return flippedCard.type === clickedCard.type
  }

  function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }

  const matchAudio = new Sound('/sound/smb3_nspade_match.wav');
  const noMatchAudio = new Sound('/sound/smb3_bonus_game_no_match.wav');
  const flipAudio = new Sound('/sound/smb3_flip_card.wav');
  const bgMusic = new Sound('/sound/3-17-n-spade.mp3');

  return (
    <Router>
      <div className="App">
        <audio id="bgmusic" src="/sound/3-17-n-spade.mp3" type="audio/mpeg" autoPlay="true" loop="loop" preload="auto"/>
        <GlobalStyle blackColor />
        <Route exact path="/" component={Start} />
        <Route exact path="/game" render = {() => (<Wrapper
            cards={cards}
            flipped={flipped}
            handleClick={handleClick}
            disabled={disabled}
            solved={solved}
          />)}/>
        <Footer />
      </div>
    </Router>
  );
};
