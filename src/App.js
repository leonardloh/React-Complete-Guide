import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = 
    {
      persons: [
        {name: 'Max', age:28},
        {name: 'Manu', age:29},
        {name: 'Stepahnie', age:31}
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

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Max', age:28},
        {name: event.target.value, age:29},
        {name: 'Stepahnie', age:27}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Person</button>
        { 
        this.state.showPersons === true? 
          <div>
            <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click ={this.switchNameHandler.bind(this, 'Leonard Loh')}
                    changed = {this.nameChangeHandler}>My hobby is reading</Person>
            <Person name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
  }
    
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' m a react app!!!'))

}

export default App;
