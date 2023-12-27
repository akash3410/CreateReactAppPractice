import React, { Component } from 'react';
import './App.css';
import Person from './Components/Another';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <Person />
//       {/* or */}
//       {/* <Person></Person> */}
//     </div>
//   );

//   // Another Way
//   // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World!"), <Person />)
// }
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Person name="Akash" age="24" />
        <Person name="Arifuzzaman" age="27" />
        <Person name="Arfan" age="20" />
        <Person name="Arifuzzan" age="28">Somethig Extra</Person>
        {/* or */}
        {/* <Person></Person> */}
      </div>
    );
  }
}

export default App;