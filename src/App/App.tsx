import {
	Footer,
	Header,
	Blog,
	Features,
	Possibility,
	WhatGPT3,
} from '../containers/index';
import { CTA, Brand, Navbar } from '../components/index';
import './app.css';
import '../main.css';

function App() {
	return (
		<div className='App'>
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
}

export default App;
