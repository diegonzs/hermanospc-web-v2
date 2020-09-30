import * as React from 'react';
import { Title } from '../title';

const socialMedias = {
	facebook: {
		title: 'Share',
		color: '#4267B1',
	},
	twitter: {
		title: 'Tweet',
		color: '#1B94DF',
	},
};

export const ShareButton = ({ value }) => {
	return (
		<div>
			<Title type="h4">{socialMedias[value].title}</Title>
			<style jsx>{`
				div {
					width: 90px;
					height: 32px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 9px;
					background-color: ${socialMedias[value].color};
				}
			`}</style>
		</div>
	);
};
