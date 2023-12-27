import React from "react";

const Books = props => {
  console.log(props);
  return (
    <div>
      <h3>Book: {props.bookName}</h3>
      <h4>Writer: {props.Writer}</h4>
      <h5>Other: {props.other}</h5>
    </div>
  );
}
export default Books;