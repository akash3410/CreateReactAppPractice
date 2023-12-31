import React, { Component } from "react";
import bookList from '../Assests/books';
import BookList from './Lists/BookList';
import Newbook from "./Representational/NewBook";
import { Routes, Route, NavLink } from "react-router-dom";

class MainComponent extends Component {
  state = {
    books: bookList
    // showBooks: true
  }

  deleteBookState = index => {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books
    });
  }

  changFromInputState = (event, index) => {
    const book = { ...this.state.books[index] };
    book.bookName = event.target.value;
    const books = [...this.state.books];
    books[index] = book;
    this.setState({
      books: books
    })
  }

  // toggleButton = () => {
  //   this.setState({ showBooks: !this.state.showBooks });
  // }

  render() {
    let books = <BookList books={this.state.books} deleteBookState={this.deleteBookState} changFromInputState={this.changFromInputState} />;

    // if (this.state.showBooks) {
    //   books = <BookList
    //     books={this.state.books}
    //     deleteBookState={this.deleteBookState}
    //     changFromInputState={this.changFromInputState}
    //   />;
    // }

    return (
      <div className='App'>
        <div className="nav-bar">
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/new-book'>NewBook</NavLink>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={books}></Route>
          <Route path="/new-book" element={<Newbook />}></Route>
        </Routes>

        {/* <h1 className="heading">Books</h1> */}
        {/* <button onClick={this.toggleButton}>Toggle Button</button> */}
        {/* {this.state.showBooks ? books : null} */}
        {/* {books} */}
        {/* <Newbook /> */}
      </div>
    );
  }
}

export default MainComponent;