import * as React from 'react';
import CoinsCount from 'components/coins-count';
import { Input } from 'components/common/form/input';
import { Textarea } from 'components/common/form/textarea';
import { Select } from 'components/common/form/select';
import { Switch } from 'components/common/switch';

const RightPanelProfileSettings = () => {
	return (
		<>
			<div className="coins-details-container">
				<CoinsCount green_count={2000} purple_count={100} />
			</div>
			<div className="information-data-content">
				<h6>Information</h6>
				<Input placeholder="Username" />
				<div className="textarea">
					<Textarea placeholder="Bio" />
				</div>
				<div className="select">
					<Select values={['Venezuela', 'Colombia']} />
				</div>
			</div>
			<div className="information-data-content-2">
				<h6>Subscribes</h6>
				<div className="susbcribe-element">
					<h5>Email Weekly Digest</h5>
					<Switch />
				</div>
				<div className="susbcribe-element">
					<h5>Email daily News Digest</h5>
					<Switch />
				</div>
				<div className="susbcribe-element">
					<h5>Email daily Explorer Digest</h5>
					<Switch />
				</div>
				<div className="susbcribe-element">
					<h5>Push notifications</h5>
					<Switch />
				</div>
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
				.information-data-content-2 {
					width: 100%;
				}
				.information-data-content-2 h6 {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 16px;
					margin-bottom: 2rem;
					margin-top: 3rem;
				}
				.information-data-content-2 h5 {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 16px;
				}
				.susbcribe-element {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 1.5rem;
				}
				.textarea {
					margin-top: 1.5rem;
				}
				.select {
					margin-top: 1rem;
				}
			`}</style>
		</>
	);
};

export default RightPanelProfileSettings;
