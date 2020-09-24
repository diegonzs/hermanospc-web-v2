import React from 'react';
import { Title } from 'components/common/title';
import { SmallBtn } from 'components/common/small-btn';
import { NewsCard } from 'components/news-card';

const fakeNews = [
	{
		id: 'qwqweqweqweqweqwe',
		title: 'Razer Announces a New Mouse For Gamers',
		image: '/images/testing/testing-news.png',
		description: 'The Razer Deathradder II with more than 80,000 PPI and RGB + wireless...',
		source: {
			name: 'TomsHardware',
			icon: '',
		},
	},
	{
		id: 'qwqweqweqweqqweqweweqwe',
		title: 'Razer Announces a New Mouse For Gamers',
		image: '/images/testing/testing-news.png',
		description: 'The Razer Deathradder II with more than 80,000 PPI and RGB + wireless...',
		source: {
			name: 'TomsHardware',
			icon: '',
		},
	},
	{
		id: 'qwqweqweqw675675eqweqwe',
		title: 'Razer Announces a New Mouse For Gamers',
		image: '/images/testing/testing-news.png',
		description: 'The Razer Deathradder II with more than 80,000 PPI and RGB + wireless...',
		source: {
			name: 'TomsHardware',
			icon: '',
		},
	},
];

export const LatestNews = () => {
	return (
		<div className="container">
			<div className="head-content">
				<Title type="h3">Latest News</Title>
				<SmallBtn text="View all" href="/" />
			</div>
			<ul className="news-list">
				{fakeNews.map((news) => (
					<li key={news.id}>
						<NewsCard {...news} />
					</li>
				))}
			</ul>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.head-content {
					display: flex;
					justify-content: space-between;
					margin-bottom: 40px;
					align-items: center;
				}
				.news-list {
					margin: 0;
					padding: 0;
					display: grid;
					grid-auto-rows: auto;
					grid-auto-flow: row;
					grid-row-gap: 20px;
					align-content: start;
					overflow: scroll;
					justify-content: center;
					li {
						list-style: none;
					}
				}
			`}</style>
		</div>
	);
};
