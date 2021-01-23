import * as React from 'react';
import theme from 'theme';

export const Tag = ({ text }) => {
	return (
		<div>
			{text}
			<style jsx>{`
				div {
					padding: 8px 12px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 8px;
					background-color: ${theme.colors.dark.backgrounds.card};
					color: ${theme.colors.dark.texts.text};
					font-size: 14px;
					font-weight: 600;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export const TagList = ({ tags }) => {
	return (
		<ul>
			{tags.map((tag) => (
				<li key={tag}>
					<Tag text={tag} />
				</li>
			))}
			<style jsx>{`
				ul {
					margin: 0;
					padding: 0;
					display: flex;
					flex-wrap: wrap;
					width: 100%;
					gap: 12px;
					max-width: 732px;
					li {
						list-style: none;
					}
				}
			`}</style>
		</ul>
	);
};
