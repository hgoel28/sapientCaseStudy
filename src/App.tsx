import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';

interface IState {
  characters: []
}

export default class App extends React.Component<{}, IState> {
  public constructor(props: {}) {
    super(props);
    this.state = {characters: []}
  }

  public componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(res => this.setState({
      characters: res.results
    }));
  }

  public render() {
    return(
      <div className ="App">
        <h1>Rick and Morty Characters</h1>
        <MainContainer characters = {this.state.characters} />
      </div>
    );
  }
}
