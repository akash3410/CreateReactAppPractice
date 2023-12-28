import React from "react";
import '../StyleSheet/Style.css';

const Books = props => {
  return (
    <div className="Books">
      <h3 onClick={props.Change}>Book: {props.bookName}</h3>
      <h4>Writer: {props.Writer}</h4>
      <h5>{props.other}</h5>
      <input type="text" onChange={props.InputState} value={props.bookName}></input>
    </div>
  );
}
export default Books;