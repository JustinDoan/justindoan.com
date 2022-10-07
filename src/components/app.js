import { useState } from 'preact/hooks';
import { Router } from 'preact-router';
import { MotionLayoutProvider } from 'react-motion-layout';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Portfolio from '../routes/portfolio';
import Header from '../components/header'
const App = () => {
	const [showHeader, setShowHeader] = useState(false)

	const handleRoute = (e) => {
		console.log(e.url)
		if (e.url !== "/") {
			console.log("Setting Show Header True")
			setShowHeader(true)
		} else {
			setShowHeader(false)
		}
	}


	return (
		<div id="app">
			{showHeader ? <Header /> : <div />}
			<Router onChange={handleRoute}>
				<Home path="/" />
				<Portfolio path="/portfolio" />
			</Router>
		</div>
	)

}

export default App;
