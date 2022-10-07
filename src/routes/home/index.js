import style from './style.css';
import { route } from 'preact-router';
import { useState } from 'preact/hooks';

const Home = () => {

	const [exiting, setExiting] = useState(false)

	const navigateToPortfolio = () => {
		// apply class to titleText
		setExiting(true)


		setTimeout(() => { route('/portfolio') }, 1300)
	}

	return (
		<div class={style.mainContainer}>
			<div class={style.titleContainer}>
				<div class={exiting ? style.titleTextExiting : style.titleText}>Justin Doan</div>
				<div class={exiting ? style.dividerExiting : style.divider} />
				<div class={exiting ? style.subtitleTextExiting : style.subtitleText}>Full Stack Engineer</div>
				<div class={exiting ? style.learnMoreButtonExiting : style.learnMoreButton} onClick={navigateToPortfolio}>Learn More ➜</div>
			</div>
		</div>
	)

};

export default Home;
