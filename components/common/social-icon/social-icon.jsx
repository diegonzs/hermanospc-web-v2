import * as React from 'react';
// import SVG from 'react-inlinesvg';
import theme from 'theme';

export const SocialIcon = ({ icon }) => {
	return (
		<div className="container">
			<img src={`/images/social-media/${icon}.svg`} alt={icon} />
			<style jsx>{`
				.container {
					width: 32px;
					height: 32px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 10px;
					background-color: ${theme.colors.dark.main.smallBtn};
					cursor: pointer;
					img {
						width: 17px;
					}
				}
			`}</style>
		</div>
	);
};
