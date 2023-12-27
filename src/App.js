import React, { Component } from 'react';
import './App.css';
import Person from './Components/Another';
import Books from './Components/Book';

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
  state = {
    books: [
      { bookName: "Physics", Writer: "Sam" },
      { bookName: "Bangla", Writer: "XYZ" },
      { bookName: "Biology", Writer: "ABC" }
    ],
    other: "I am Other!"
  }

  // // In old Version
  // constructor() {
  //   super();
  //   this.state = {
  //     books: [
  //       { bookName: "Physics", Writer: "Sam" },
  //       { bookName: "Bangla", Writer: "XYZ" },
  //       { bookName: "Biology", Writer: "ABC" }
  //     ],
  //     other: "I am Other!"
  //   }
  // }
  render() {
    return (
      <div className="App">
        {/* <h1>Hello World!</h1>
        <Person name="Akash" age="24" />
        <Person name="Arifuzzaman" age="27" />
        <Person name="Arfan" age="20" />
        <Person name="Arifuzzan" age="28">Somethig Extra</Person> */}

        <h1>Books</h1>
        <Books bookName={this.state.books[0].bookName} Writer={this.state.books[0].Writer} />
        <Books bookName={this.state.books[1].bookName} Writer={this.state.books[1].Writer} />
        <Books bookName={this.state.books[2].bookName} Writer={this.state.books[2].Writer} />
        <Books other={this.state.other} />

        {/* or */}
        {/* <Person></Person> */}
      </div>
    );
  }
}

export default App;