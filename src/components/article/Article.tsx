import React from 'react';
import { Props } from './types/types';
import './article.css';

const Article = ({ imgURL, date, title }: Props) => {
	return (
		<div className='gpt3__blog-container_article'>
			<div className='gpt3__blog-container_article-image'>
				<img src={imgURL} alt='blog image' />
			</div>
			<div className='gpt3__blog-container_article-content'>
				<p>{date}</p>
				<h3>{title}</h3>
				<p>Read Full Article</p>
			</div>
		</div>
	);
};

export default Article;
