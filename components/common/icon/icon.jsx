import * as React from 'react';
import SVG from 'react-inlinesvg';
import theme from 'theme';

export const Icon = ({ src }) => {
	return (
		<div className="container">
			<img src={src} />
			<style jsx>{`
				.container {
					width: 32px;
					height: 32px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 10px;
					background-color: ${theme.colors.dark.main.smallBtn};
					img {
						width: 17px;
					}
				}
			`}</style>
		</div>
	);
};
