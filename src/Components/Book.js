import React from "react";
import '../StyleSheet/Style.css';

// const Books = props => {
//   return (
//     <div className="book">
//       <h3 onClick={props.delete}>Book: {props.bookName}</h3>
//       <h4>Writer: {props.Writer}</h4>
//       <h5>{props.other}</h5>
//       <input type="text" onChange={props.InputState} value={props.bookName}></input>
//     </div>
//   );
// }

const Books = props => {
  return (
    <div className="book">
      <h3 onClick={props.delete}>Book: {props.bookName}</h3>
      <h4>Writer: {props.Writer}</h4>
      <input type="text" onChange={props.inputState} value={props.bookName} />
    </div>
  );
}
export default Books;