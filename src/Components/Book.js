import React from "react";

const Books = props => {
  return (
    <div>
      <h3>Book: {props.bookName}</h3>
      <h4>Writer: {props.Writer}</h4>
      <h5>{props.other}</h5>
    </div>
  );
}
export default Books;