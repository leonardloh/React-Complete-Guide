import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        {name: 'Max', age:28},
        {name: 'Manu', age:29},
        {name: 'Stepahnie', age:31}
      ]
    }
  );

  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);
  const switchNameHandler = () => {
    // console.log('was clicked !');
    //DONT DO THIS this.state.persons[0].name = 'Loh JZ';
    setPersonsState({
      persons: [
        {name: 'JZ', age:28},
        {name: 'Manu', age:29},
        {name: 'Stepahnie', age:18}
      ],
      otherStates: personsState.otherStates
    });
  };

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is reading</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\' m a react app!!!'))

}


export default app;
