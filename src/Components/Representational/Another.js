import React, { Component } from "react";
// function Person(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Name: {props.name} Age: {props.age}</h1>
//       <h4>{props.children}</h4>
//     </div>
//   );

//   // Another Way
//   // return React.createElement('div', null, React.createElement('h1', null, "I am Person"))
// }
class Person extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Name: {this.props.name} Age: {this.props.age}</h1>
        <h4>{this.props.children}</h4>
      </div>
    );
  }
}
export default Person;