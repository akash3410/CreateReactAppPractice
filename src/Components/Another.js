import React from "react";
function Person() {
  return (
    <div>
      <h1>I am Person!</h1>
    </div>
  );

  // Another Way
  // return React.createElement('div', null, React.createElement('h1', null, "I am Person"))
}
export default Person;