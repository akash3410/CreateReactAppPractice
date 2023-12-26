import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Person />
      {/* or */}
      {/* <Person></Person> */}
    </div>
  );

  // Another Way
  // return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World!"), <Person />)
}
function Person() {
  return (
    <div>
      <h1>I am a Person</h1>
    </div>
  );

  // Another Way
  // return React.createElement('div', null, React.createElement('h1', null, "I am Person!"))
}

export default App;
