import React from "react";
function Person(props) {
  console.log(props);
  return (
    <div>
      <h1>Name: {props.name} Age: {props.age}</h1>
      <h4>{props.children}</h4>
    </div>
  );

  // Another Way
  // return React.createElement('div', null, React.createElement('h1', null, "I am Person"))
}
export default Person;