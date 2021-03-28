import * as React from 'react';
import CoinsCount from 'components/coins-count';

const RightPanelProfileSettings = () => {
	return (
		<>
			<div className="coins-details-container">
				<CoinsCount green_count={2000} purple_count={100} />
			</div>
			<div className="information-data-content">
				<h6>Information</h6>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.coins-details-container {
					position: absolute;
					left: 9%;
				}
				.information-data-content {
					width: 100%;
				}
				.information-data-content h6 {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 16px;
					margin-bottom: 2rem;
				}
			`}</style>
		</>
	);
};

export default RightPanelProfileSettings;
