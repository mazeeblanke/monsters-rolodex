import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css'

export class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((monsters) => {
        this.setState({
          monsters
        })
      })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters
      .filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          handleChange={(e) => {
            this.setState({
              searchField: e.target.value
            })
          }}
          placeholder="Search Monsters"
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;

