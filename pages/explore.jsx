import { ColorList } from 'components/common/color';
import { TagList } from 'components/common/tag';
import { Title } from 'components/common/title';
import { Layout } from 'components/layout';
import * as React from 'react';

const fakeColors = [
	{
		name: 'blue',
		hex: '#3F51B5',
	},
	{
		name: 'light blue',
		hex: '#03A9F4',
	},
	{
		name: 'Violet',
		hex: '#C83EDF',
	},
	{
		name: 'Pink',
		hex: '#EEA5DA',
	},
	{
		name: 'Orange',
		hex: '#FF4040',
	},
	{
		name: 'Strong Orange',
		hex: '#FF924A',
	},
	{
		name: 'Yellow',
		hex: '#FFEB3B',
	},
];

const fakeTags = [
	'Setup',
	'PC Build',
	'Room',
	'Keyboard',
	'RGB',
	'minimal',
	'Ultrawide',
	'Dual Monitor',
	'Multi Monitor',
];

const Container = ({ title, children }) => {
	return (
		<div>
			<Title type="h3">{title}</Title>
			{children}
			<style jsx>{`
				div {
					display: grid;
					grid-gap: 12px;
				}
			`}</style>
		</div>
	);
};

const Explore = () => {
	return (
		<Layout>
			<div className="container">
				<Container title="Explore by Categories">
					<TagList tags={fakeTags} />
				</Container>
				<Container title="Explore by Color Theme">
					<ColorList colors={fakeColors} />
				</Container>
				<div className="post-list-container">
					<div className="post-list-container-title">
						<Title type="h3">Trending Now</Title>
						<div className="post-list-container-title-2">
							<Title type="h3">Recent</Title>
							<Title type="h3">Following</Title>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.container {
					display: grid;
					gap: 32px;
				}
				.post-list-container {
					display: grid;
					gap: 12px;
					&-title {
						display: grid;
						grid-auto-flow: column;
						grid-template-columns: 1fr auto auto;
					}
				}
			`}</style>
		</Layout>
	);
};

export default Explore;
