import { h } from 'preact';
import style from './style.css';

const Home = () => (
	<div class={style.mainContainer}>
		<div class={style.titleContainer}>
			<div class={style.titleText}>Justin Doan</div>
			<div class={style.divider} />
			<div class={style.subtitleText}>Full Stack Engineer</div>
		</div>

	</div>

);

export default Home;
