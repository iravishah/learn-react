import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] constuctor called');
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount called');
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount called');
  }

  render () {
    console.log('[Person.js] render called');
    
    return (
      <div className = {classes.Person}>
        <p onClick = { this.props.click }>Hi! This is {this.props.name} and my age is {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type = 'text' onChange={this.props.changed} value = {this.props.name} />
      </div>
    )
  }
}

export default Person;

//stateless component

/* const person = (props) => {
    return (
        <div className = {classes.Person}>
            <p onClick = { props.click }>Hi! This is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type = 'text' onChange={props.changed} value = {props.name} />
        </div>
    )
}

export default person; */