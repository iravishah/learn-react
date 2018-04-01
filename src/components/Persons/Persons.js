import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] constuctor called');
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount called');
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount called');
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps ', nextProps);
    console.log('[UPDATE][Persons.js] componentWillReceiveProps called');
  }

  // React PureComponent itself watch for the changes in the props or state.
  // So, no longer need for shouldComponentUpdate

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update] [Persons.js] shouldComponentUpdate called');
    return nextProps.persons !== this.props.persons ||
      nextProps.clicked !== this.props.clicked || 
      nextProps.changed !== this.props.changed;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE][Persons.js] componentWillUpdate called');
  }

  componentDidUpdate() {
    console.log('[UPDATE][Persons.js] componentDidUpdate called');    
  }

  render () {
    console.log('[Persons.js] render called');
    
    return this.props.persons.map((person, index) => {
      return <Person 
        click = { this.props.clicked.bind(this, index ) }
        name = { person.name }
        age = { person.age } 
        key = { person.id }
        changed = { (event) => this.props.changed(event, person.id) }/>
    })
  }
}

export default Persons;

//stateless component

/* const persons = (props) => props.persons.map((person, index) => {
    return <Person 
            click = { props.clicked.bind(this, index ) }
            name = { person.name }
            age = { person.age } 
            key = { person.id }
            changed = { (event) => props.changed(event, person.id) }/>
  })

export default persons; */