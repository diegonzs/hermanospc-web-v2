import * as React from 'react';
import theme from 'theme';

export const AvatarForm = () => {
	return (
		<div className="container">
			<div className="box">
				<img src="/images/testing/user-face-big.png" alt="user-face" />
			</div>
			<div className="box button">Change</div>
			<style jsx>{`
				.container {
					display: grid;
					grid-auto-flow: column;
					grid-gap: 24px;
					justify-content: start;
				}
				.button {
					cursor: pointer;
				}
				.box {
					display: flex;
					justify-content: center;
					align-items: center;
					overflow: hidden;
					border-radius: 16px;
					border: none;
					width: 163px;
					height: 101px;
					font-weight: 600;
					font-size: 32px;
					color: ${theme.colors.dark.texts.text};
					background-color: ${theme.colors.dark.backgrounds.childCard};
					img {
						display: flex;
						width: 100%;
						object-fit: cover;
					}
				}
			`}</style>
		</div>
	);
};
