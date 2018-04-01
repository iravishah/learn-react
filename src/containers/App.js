/*

This is not the idea way to call function as it is not that efficient
  () => this.switchNameHandler('awara!!');
Instead of use this,
  this.switchNameHandler.bind(this, 'sam');

Instead of JSX you can write the syntax as below:
  React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This should work!!'));  
  
*/

import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'Ravi', 
        age: 34
      },
      {
        id: 2,
        name: 'Kunal',
        age: 22
      },
      {
        id: 3,
        name: 'Patel',
        age: 23
      }
    ],
    showPersons: false
  }

  switchNameHandler = (myName) => {
    this.setState({ persons: [
      {
        name: myName, age: 20
      },
      {
        name: 'Kunal', age: 22
      },
      {
        name: 'Priya', age: 23
      }
    ] })
  }

  changeNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    //assigns object from array to variable

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  removePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //creates new array from the array same as above line do
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const isShow = this.state.showPersons;
    this.setState({ showPersons: !isShow });
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
        persons = {this.state.persons}
        clicked = {this.removePersonHandler}
        changed = {this.changeNameHandler}
      />
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons = { this.state.showPersons }
          persons = { this.state.persons }
          clicked = { this.togglePersonsHandler }
        />
        { persons }
      </div>
    );
  }
}

export default App;