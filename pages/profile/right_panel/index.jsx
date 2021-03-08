import * as React from 'react';
import CoinsCount from 'components/coins-count';

const RightPanelProfile = () => {
	return (
		<>
			<div className="coins-details-container">
				<CoinsCount green_count={2000} purple_count={100} />
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.coins-details-container {
					position: absolute;
					left: 9%;
				}
			`}</style>
		</>
	);
};

export default RightPanelProfile;
