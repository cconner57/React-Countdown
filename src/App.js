import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [ time, setTime ] = useState('');

	useEffect(() => {
		if (!time) return;
		const intervalId = setInterval(() => {
			setTime(time - 1);
		}, 1000);
		return () => clearInterval(intervalId);
	});

	return (
		<div className="container">
			<h5>Countdown</h5>
			<div className="display">
				<p>Time left: {time}</p>
				<input className="time" type="text" name="Enter time" onChange={(e) => setTime(e.target.value)} />
				<input type="submit" value="Enter" />
			</div>
		</div>
	);
}

export default App;
