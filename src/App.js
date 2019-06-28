import React, {Component} from 'react';
import Character from "./Assets/character";
import './App.css';
import characters from './characters.json'
import Score from './Assets/score'
import Wrapper from './Assets/wrapper'
import "./App.css";
  
class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    goal: 12,
    status: ""
  };

  shuffleScoreCharacter = id => {
    let clickedCharacters = this.state.clickedCharacters;

    if(clickedCharacters.includes(id)){
      this.setState({ clickedCharacters: [], score: 0, status:  "Game over." });
      return;
    }else{
      clickedCharacters.push(id)

      if(clickedCharacters.length === 12){
        this.setState({score: 12, status: "You're in the Endgame now!", clickedCharacters: []});
        return;
      }

      this.setState({ characters, clickedCharacters, score: clickedCharacters.length, status: " " });

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Marvel Memory game</h1>
          <p className="App-intro">
          Click on an image to earn points, but don't click on any more than once!
          </p>
        </header>
        <Score total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.characters.map(character => (
            <Character
              shuffleScoreCharacter={this.shuffleScoreCharacter}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;