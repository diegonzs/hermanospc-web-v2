import * as React from 'react';
import CoinsCount from 'components/coins-count';
import { SocialMediaList } from 'components/social-media-list';

const RightPanelProfile = () => {
	return (
		<>
			<div className="coins-details-container">
				<CoinsCount green_count={2000} purple_count={100} />
			</div>
			<div className="information-data-content">
				<h6>Information</h6>
				<p>Hi I'm Andres. I'm a product designer and this is my setup, I play and work here.</p>
				<div className="social-link-container">
					<SocialMediaList />
				</div>
			</div>
			<div className="location-content-container">
				<h6>Location</h6>
				<div className="location-content">
					<img src="images/profile-page/Map.svg" />
					<p>Venezuela</p>
				</div>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.coins-details-container {
					position: absolute;
					left: 9%;
				}
				.information-data-content h6 {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 16px;
					margin-bottom: 2rem;
				}
				.information-data-content p {
					letter-spacing: 0px;
					color: #bfbfbf;
					font-size: 15px;
					margin-bottom: 1.5rem;
				}
				.social-link-container {
					width: 0;
				}
				.location-content {
					display: flex;
					align-items: center;
				}
				.location-content p {
					font-size: 14px;
					letter-spacing: 0px;
					color: #efefef;
				}
				.location-content img {
					margin-left: -9px;
					margin-right: 1rem;
				}
				.location-content-container h6 {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 16px;
					margin-bottom: 2rem;
				}
				.location-content-container {
					width: 100%;
					margin-top: 5rem;
				}
			`}</style>
		</>
	);
};

export default RightPanelProfile;
