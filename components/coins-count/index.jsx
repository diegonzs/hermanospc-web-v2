import * as React from 'react';

const CoinsCount = ({ green_count, purple_count }) => {
	return (
		<>
			<div className="coin-icon-container">
				<img src="images/profile-page/coin-green.svg" alt="green coin" />
				<span className="green-text">{green_count}</span>
			</div>
			<div className="coin-icon-container">
				<img src="images/profile-page/coin_purple.svg" alt="purple coin" />
				<span className="purple-text">{purple_count}</span>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.coin-icon-container {
					display: flex;
				}
				.coin-icon-container img {
					margin-right: 0.7rem;
					margin-bottom: 0.5rem;
				}
				.coin-icon-container .green-text {
					letter-spacing: 0px;
					color: #0effa3;
				}
				.coin-icon-container .purple-text {
					letter-spacing: 0px;
					color: #e737ec;
				}
			`}</style>
		</>
	);
};

export default CoinsCount;
