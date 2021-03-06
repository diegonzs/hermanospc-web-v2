import * as React from 'react';
import theme from 'theme';

export const Loader = () => {
	return (
		<div className="container">
			<div className="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<style jsx>{`
				.container {
					width: 100%;
					display: flex;
					justify-content: center;
					grid-column: 1 / -1;
					height: 100%;
				}
				.loader {
					display: inline-block;
					position: relative;
					width: 80px;
					height: 80px;
					div {
						box-sizing: border-box;
						display: block;
						position: absolute;
						width: 64px;
						height: 64px;
						margin: 8px;
						border: 8px solid ${theme.colors.dark.main.accent};
						border-radius: 50%;
						animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
						border-color: #0effa3 transparent transparent transparent;
						&:nth-child(1) {
							animation-delay: -0.45s;
						}
						&:nth-child(2) {
							animation-delay: -0.3s;
						}
						&:nth-child(3) {
							animation-delay: -0.15s;
						}
					}
				}
				@keyframes loader {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};
