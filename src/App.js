import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import Card from './components/Card';
import cards from './cards.json';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    background-color: ${props => (props.blackColor ? 'black' : 'white')};
  }`


class App extends Component {

state = {
  cards,
  coins: 21,
  lives: 10,
  score: 88010,
  src: cards.back
}

flipCard = (id) => {
  console.log(id);
  this.setState({
    src:cards.front
  });
}


  render() {

    return (
      <div className="App">
        <GlobalStyle blackColor />
        <Wrapper>
        {this.state.cards.map(card => (
          <Card 
            flipCard={this.flipCard}
            back={card.back}
            id={card.id}
            key={card.id}
            front={card.front}
          />))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
