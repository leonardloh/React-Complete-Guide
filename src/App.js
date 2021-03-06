import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black
      }`;

class App extends Component {
  state = 
    {
      persons: [
        {id:'71hladsfa', name: 'Max', age:28},
        {id:'719dsa', name: 'Manu', age:29},
        {id:'dsajldj',name: 'Stepahnie', age:31}
      ]
    }

  
  switchNameHandler = (newName) => {
    // console.log('was clicked !');
    //DONT DO THIS this.state.persons[0].name = 'Loh JZ';
    this.setState({
      persons: [
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'Stepahnie', age:18}
      ],

      otherState: 'some other states',
      showPersons: false
    });
  };

  nameChangeHandler = (event, id) =>{

    //find the person index using findIndex
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id === id;
      });

    
    //find the person via index
    const person = {
      ...this.state.persons[personIndex]
    };

    //change the name
    person.name = event.target.value;

    //get a copy of old states and store it to a variable
    const persons = [...this.state.persons];
    // change the old state
    persons[personIndex] = person;

    // update to new state
    this.setState({
      persons:persons
    });
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() =>this.deletePersonHandler(index)}
             name={person.name} 
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangeHandler(event, person.id)}
             />
          })}
        </div> 
      );

      // style.backgroundColor = 'red';
      // style[':hover']= {
      //     backgroundColor: 'salmon',
      //     color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <=2 )
    {
      classes.push('red');
    }

    if (this.state.persons.length <=1)
    {
      classes.push('bold');
    }

    return (
      
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Toggle Person
          </StyledButton>
        {persons}
      </div>
    
    );
  }
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' m a react app!!!'))

}

export default App;
