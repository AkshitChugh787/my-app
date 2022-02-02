// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on me!";
// }
// Create a React Component
// A component is a function or a class that produces HTML to show the user using jsx, and handles feedback from the user using event handlers
const App = () => {
  const buttonText = { text: "Click Me!" };
  const labelText = "Enter name:";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "tomato", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the React Component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
