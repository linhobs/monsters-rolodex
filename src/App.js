import React, { Component } from 'react';
// import { SearchField } from './components/searchbox/searchfield.component'
import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    //set the app state
    this.state = {
      monsters: [

      ],
      searchField: ''
    }
  };


  //fetching data from APi first time componet is rendered
  //assign value returned to state value
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }

  //handle input change . arrow fxn extends scope
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });

  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        {/* add search bar */}
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />


        <CardList monsters={filteredMonsters} />

      </div>
    );
  }


}


export default App;
