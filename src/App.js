import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({monsters:users})})
  }

  render() {
    var {monsters, searchField} = this.state;
    var filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <input type="search" placeholder="serach monster" 
        onChange= { e => this.setState({searchField:e.target.value})} />
        <CardList monsters={filteredMonster}>               
         </CardList> 
      </div>
    );
  }
}

export default App;
