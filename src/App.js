import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('Constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(
      () => {
        return {monsters: users}
      },
      () => {
        console.log(this.state);
      }
      ));
      console.log('componentDidMount');
  }

  render(){
    console.log('Render');
  return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters'
          onChange={(event) => {
            console.log(event.target.value);
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => { return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => {
              return {monsters : filteredMonsters}
            });

            
          }} />
          {this.state.monsters.map(monster => (
            <div key={monster.id}>
              <h1 >{monster.name}</h1> 
            </div>
          ))}
      </div>
    );
  } 
  
}

export default App;
