import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import * as React from 'react';
import theme from 'theme';

const games = [
	{
		id: 'adsdas',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdasasdas',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdasasdasfd',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
	{
		id: 'adsdashfghfgh',
		title: 'League of Legend',
		image: '/images/testing/lol.png',
		score: '8.8',
	},
];

const FreeToPlay = () => {
	return (
		<Layout>
			<HeadTitle>Free to Play Games</HeadTitle>
			<ul>
				{games.map((game, index) => (
					<li key={`${game.id}-${index}`}>
						<div className="image-container">
							<img src={game.image} alt="" />
						</div>
						<Title type="h3">{game.title}</Title>
						<Paragraph>{game.score} Metacritics</Paragraph>
					</li>
				))}
			</ul>
			<style jsx>{`
				ul {
					display: grid;
					grid-auto-flow: dense;
					grid-template-columns: repeat(auto-fit, 253px);
					grid-column-gap: 62px;
					grid-row-gap: 48px;
					justify-content: center;
					li {
						.image-container {
							border-radius: 20px;
							overflow: hidden;
							height: 300px;
							margin-bottom: 16px;
							img {
								background-color: ${theme.colors.dark.texts.text};
								width: 100%;
								object-fit: cover;
							}
						}
					}
				}
			`}</style>
		</Layout>
	);
};

export default FreeToPlay;
