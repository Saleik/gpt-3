import React from 'react';
import { Feature } from '../../components';
import { featureData } from './types/types';
import { v4 as uuidV4 } from 'uuid';

import './whatGPT3.css';
const featuresData: featureData[] = [
	{
		title: 'Chatbots',
		text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought.',
	},
	{
		title: 'Knowledgebase',
		text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
	},
	{
		title: 'Education',
		text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b',
	},
];

const WhatGPT3 = () => {
	return (
		<div className='gpt3__whatGPT3 section__margin' id='wgpt3'>
			<div className='gpt3__whatGPT3-feature'>
				<Feature
					title='What is GPT-3'
					text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
				/>
			</div>
			<div className='gpt3__whatGPT3-heading'>
				<h1 className='gradient__text'>
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className='gpt3__whatGPT3-container'>
				{featuresData.map((feature) => (
					<Feature title={feature.title} text={feature.text} key={uuidV4()} />
				))}
			</div>
		</div>
	);
};

export default WhatGPT3;
