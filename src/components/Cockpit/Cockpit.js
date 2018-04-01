import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;        
    }

    assignedClasses = assignedClasses.join(' ');

    return (
        <div className = {classes.Cockpit}>
            <h1> Hi, This is a first react app </h1>
            <p className = { assignedClasses }> This is a para </p>
            <button 
            className = {btnClass}
            onClick = {props.clicked}> Toggle Persons </button>
        </div>
    )
}

export default cockpit;