import React from "react";
import '../../StyleSheet/Style.css';
import { NavLink } from "react-router-dom";

const Books = props => {
  return (
    <div className="book">
      <h3 onClick={props.delete}>Book: {props.book.bookName}</h3>
      <h4 onClick={props.selectedBookDetails}>Writer: {props.book.Writer}</h4>
      <input type="text" onChange={props.inputState} value={props.book.bookName} />
      <NavLink onClick={props.selectedBookDetails} to={'/book-details/' + props.book.bookName} className="book-nav-link">See More.....</NavLink>
    </div>
  );
}
export default Books;