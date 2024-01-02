import React, { Component } from "react";
import bookList from '../Assests/books';
import BookList from './Lists/BookList';
import Newbook from "./Representational/NewBook";
import { Routes, Route, NavLink } from "react-router-dom";
import SignIn from "./auth/SignIn";
import PrivateRoute from "./auth/PrivateRoute";
import BookDetail from "./Representational/BookDetail";

class MainComponent extends Component {
  state = {
    books: bookList,
    // showBooks: true
    selectedBook: null
  }

  selectedBookDetails = (bookId) => {
    const book = this.state.books.filter((book) => book.id === bookId)[0];
    this.setState({
      selectedBook: book,
    })
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
    let books = <BookList books={this.state.books} deleteBookState={this.deleteBookState} changFromInputState={this.changFromInputState} selectedBookDetails={this.selectedBookDetails} />;

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
              <NavLink to='/'>Sign In</NavLink>
            </li>
            <li>
              <NavLink to='/books'>Books</NavLink>
            </li>
            <li>
              <NavLink to='/new-book'>NewBook</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/books" element={books}></Route>
            <Route path="/new-book" element={<Newbook />}></Route>
            <Route path="//book-details/:bookName" element={<BookDetail book={this.state.selectedBook} />}></Route>
          </Route>
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