import React from 'react';
import './feature.css';
import { Props } from './types/types';

const Feature = ({ title, text }: Props) => {
	return (
		<div className='gpt3__features-container__feature'>
			<div className='gpt3__features-container__feature-title'>
				<div />
				<h1>{title}</h1>
			</div>
			<div className='gpt3__features-container_feature-text'>{text}</div>
		</div>
	);
};

export default Feature;
