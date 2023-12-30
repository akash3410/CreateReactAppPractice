import React from "react";
import Books from '../Representational/Book';

const BookList = props => {
  return (
    props.books.map((book, index) => {
      return (
        <Books
          bookName={book.bookName}
          Writer={book.Writer}
          delete={() => props.deleteBookState(index)}
          key={book.id}
          inputState={(event) => props.changFromInputState(event, index)}
        />
      );
    })
  );
}

export default BookList;