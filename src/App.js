import React, { Component } from 'react';
import './App.css';
import MainComponent from './Components/mainComponent';

const App = () => {
  return (
    <MainComponent />
  );
}
export default App;


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
// class App extends Component {
//   state = {
//     books: [
//       { id: 1, bookName: "Physics", Writer: "Sam" },
//       { id: 2, bookName: "Bangla", Writer: "XYZ" },
//       { id: 3, bookName: "Biology", Writer: "ABC" }
//     ],
//     other: "I am Other!"
//   }

//   // // In old Version
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     books: [
//   //       { bookName: "Physics", Writer: "Sam" },
//   //       { bookName: "Bangla", Writer: "XYZ" },
//   //       { bookName: "Biology", Writer: "ABC" }
//   //     ],
//   //     other: "I am Other!"
//   //   }
//   // }

//   // changeState = (newBook, newWriter) => {
//   //   this.setState({
//   //     books: [
//   //       { bookName: newBook, Writer: newWriter },
//   //       { bookName: newBook, Writer: newWriter },
//   //       { bookName: "Mathmetics", Writer: "MATH" }
//   //     ]
//   //   });
//   // }

//   changeWithInputState = (event, index) => {
//     // this.setState({
//     //   books: [
//     //     { bookName: event.target.value, Writer: "ABC" },
//     //     { bookName: "Bangla", Writer: "newWriter" },
//     //     { bookName: "Mathmetics", Writer: "MATH" }
//     //   ]
//     // });
//     const book = { ...this.state.books[index] }
//     book.bookName = event.target.value;
//     const books = [...this.state.books];
//     books[index] = book;
//     this.setState({ books: books });
//   }

//   deleteBookState = (event, index) => {
//     const book = [...this.state.books];
//     book.splice(index, 1);
//     this.setState({
//       books: book
//     })
//   }
//   render() {
//     // const bookStateArray = this.state.books;
//     // console.log(bookStateArray);
//     const books = this.state.books.map((book, index) => {
//       return (
//         <Books
//           bookName={book.bookName}
//           Writer={book.Writer}
//           delete={(event) => this.deleteBookState(event, index)}
//           key={book.id}
//           InputState={(event) => this.changeWithInputState(event, index)} />
//       );
//     });

//     return (
//       <div className="App">
//         {/* <h1>Hello World!</h1>
//         <Person name="Akash" age="24" />
//         <Person name="Arifuzzaman" age="27" />
//         <Person name="Arfan" age="20" />
//         <Person name="Arifuzzan" age="28">Somethig Extra</Person> */}

//         {/* or */}
//         {/* <Person></Person> */}

//         <h1>Books</h1>
//         {books}
//         {/* <button onClick={() => this.changeState("Programming Language", "New Writer")}>Change State</button> */}

//         {/* <input type="text" className="input" onChange={this.changeWithInputState} /> */}

//         {/* <Books bookName={this.state.books[0].bookName} Writer={this.state.books[0].Writer} InputState={this.changeWithInputState} />
//         <Books bookName={this.state.books[1].bookName} Writer={this.state.books[1].Writer} Change={() => this.changeState("C++", "C")} />
//         <Books bookName={this.state.books[2].bookName} Writer={this.state.books[2].Writer} other={this.state.other} /> */}
//       </div>
//     );
//   }
// }