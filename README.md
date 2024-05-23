// Import the App.css file for styling
import "./App.css";

// Import React hooks: useEffect and useState
import { useEffect, useState } from "react";

// Import the Login component
import Login from "./components/Login";

// Import the HOC (Higher-Order Component)
import HOC from "./components/HOC";

// Import the Greetings component
import Greetings from "./components/Greetings";

function App() {
  // Declare a state variable 'count' with initial value 0 and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Declare a state variable 'text' with initial value an empty string and a function 'setText' to update it
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => {
    setShowImage(!showImage);
  };

  // Define a function 'onInputChange' to handle input changes
  // This function takes the event 'e' as an argument and updates the 'text' state with the input value
  const onInputChange = (e) => {
    setText(e.target.value);
  };

  // Return the JSX (HTML-like syntax for React) to render the component
  return (
    <>
      {/* Create a link to the login page */}
      <a href="/login">Login</a>

      {/* Create a link to the home page */}
      <a href="/">Home</a>

      {/* Create a div to hold the input element */}
      <div>
        {/* Create an input field with an onChange event handler that calls 'onInputChange' */}
        <input onChange={onInputChange} placeholder="type here" />
      </div>
      <div>
        {/* Button to toggle the image visibility */}
        <button onClick={toggleImage}> toggle image </button>

        {/* Conditional rendering of the image */}
        {showImage && <img src="/human.jpg"></img>}
      </div>

      {/* Create a div to hold the paragraph and button */}
      <div>
        {/* Display the current count */}
        <p>Button clicked {count} times</p>

        {/* Create a button that increments the count state when clicked */}
        <button onClick={() => setCount(count + 1)}>Click here</button>
      </div>

      {/* Display the current value of the 'text' state */}
      <>{text}</>

      {/* Conditionally render components based on the current URL path */}
      {window.location.pathname === "/" ? (
        // If the path is '/', render the Greetings component with the name "rami"
        <Greetings name="john" />
      ) : (
        // Otherwise, wrap the Login component in the HOC and pass the 'text' state as the login prop
        <HOC>
          <Login login={text} />
        </HOC>
      )}
    </>
  );
}

// Export the App component as the default export
export default App;
