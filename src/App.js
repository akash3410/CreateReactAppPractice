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

  changeState = (newBook, newWriter) => {
    this.setState({
      books: [
        { bookName: newBook, Writer: newWriter },
        { bookName: newBook, Writer: newWriter },
        { bookName: "Mathmetics", Writer: "MATH" }
      ]
    });
  }
  changeWithInputState = event => {
    this.setState({
      books: [
        { bookName: event.target.value, Writer: "ABC" },
        { bookName: "Bangla", Writer: "newWriter" },
        { bookName: "Mathmetics", Writer: "MATH" }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        {/* <h1>Hello World!</h1>
        <Person name="Akash" age="24" />
        <Person name="Arifuzzaman" age="27" />
        <Person name="Arfan" age="20" />
        <Person name="Arifuzzan" age="28">Somethig Extra</Person> */}

        {/* or */}
        {/* <Person></Person> */}

        <h1>Books</h1>
        <button onClick={() => this.changeState("Programming Language", "New Writer")}>Change State</button>

        <input type="text" className="input" onChange={this.changeWithInputState} />

        <Books bookName={this.state.books[0].bookName} Writer={this.state.books[0].Writer} InputState={this.changeWithInputState} />
        <Books bookName={this.state.books[1].bookName} Writer={this.state.books[1].Writer} Change={() => this.changeState("C++", "C")} />
        <Books bookName={this.state.books[2].bookName} Writer={this.state.books[2].Writer} other={this.state.other} />
      </div>
    );
  }
}

export default App;