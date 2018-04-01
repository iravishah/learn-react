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
import Person from '../components/Persons/Person/Person';

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
    let btnClass = '';

    if(this.state.showPersons) {
      persons = (
        <div>

          {
            this.state.persons.map((person, index) => {
              return <Person 
                      click = { this.removePersonHandler.bind(this, index) }
                      name = { person.name }
                      age = { person.age } 
                      key = { person.id }
                      changed = { (event) => this.changeNameHandler(event, person.id) }/>
            })
          }
        </div> 
      )
      btnClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    assignedClasses = assignedClasses.join(' ');

    return (
      <div className={classes.App}>
        <h1> Hi, This is a first react app </h1>
        <p className = { assignedClasses }> This is a para </p>
        <button 
          className = {btnClass}
          onClick = {this.togglePersonsHandler }> Toggle Persons </button>
        { 
         persons
        }
      </div>
    );
  }
}

export default App;