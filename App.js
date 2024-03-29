import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
// Counter is a state initialized to 0
const [counter, setCounter] = useState(0)

// Function is called everytime increment button is clicked
const handleClick1 = () => {
	// Counter state is incremented
	setCounter(counter + 1)
}

// Function is called everytime decrement button is clicked
const handleClick2 = () => {
	// Counter state is decremented
	setCounter(counter - 1)
}

return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>
	Counter Application
	<div style={{
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>
		{counter}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
		onClick={handleClick1}>Increase</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'blue',
		borderRadius: '8%',
		color: 'whitgrey',
		}}
		onClick={handleClick2}>Decrease</button>
	</div>
	</div>
)
}

export default App
