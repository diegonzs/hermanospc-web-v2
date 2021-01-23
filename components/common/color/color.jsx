import * as React from 'react';
import theme from 'theme';

export const Color = ({ name, hex }) => {
	return (
		<div title={name}>
			<style jsx>{`
				div {
					border-radius: 10px;
					border: 1.6px solid ${theme.colors.dark.icons.iconOnly};
					width: 32px;
					height: 32px;
					background-color: ${hex};
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export const ColorList = ({ colors }) => {
	return (
		<ul>
			{colors.map((color) => (
				<li key={color.hex}>
					<Color name={color.name} hex={color.hex} />
				</li>
			))}
			<style jsx>{`
				ul {
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
