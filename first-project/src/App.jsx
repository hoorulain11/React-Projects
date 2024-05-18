import React, { useState } from "react";
import "./App.css"


const App = () => {
	// Counter is a state initialized to 0
	const [counter, setCounter] = useState(0);

	// Function is called everytime when button is clicked
	const handleIncrement = () => {

		setCounter(counter + 1);
	};

	// Function is called everytime when button is clicked
	const handleDecrement = () => {
    if(counter > 0){
    setCounter(counter - 1);
    }else{
      alert("Error");
    }
	};

	return (
		<div className="container">
      <h1>Counter App</h1>
      <div className="displayValue">{counter}</div>
			<div className="buttons">
				<button onClick={handleIncrement}>+</button>
				<button onClick={handleDecrement}>-</button>
			</div>
		</div>
	);
};

export default App;
