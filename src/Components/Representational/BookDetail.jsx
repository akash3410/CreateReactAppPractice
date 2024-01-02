import React from "react";
import { NavLink } from "react-router-dom";

const BookDetail = ({ book }) => {
  return book && (
    <div className="book">
      <h3>Book: {book.bookName}</h3>
      <h4>Writer: {book.Writer}</h4>
      <p>{book.para}</p>
    </div>
  );
}

export default BookDetail;