import React from 'react';
import { Layout } from 'components/layout';
import { MainBtn } from 'components/common/main-btn';
import RightPanelProfileSettings from './right-panel';

const ProfileSettings = () => {
	return (
		<Layout rightPanel={<RightPanelProfileSettings />}>
			<div className="header-menu">
				<h1 className="title">Settings</h1>
				<div className="menu-buttons">
					<button className="cancel-button">Cancel</button>
					<MainBtn text="Save" type="default" />
				</div>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.title {
					letter-spacing: 0px;
					color: #efefef;
					font-size: 40px;
				}
				.header-menu {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.menu-buttons {
					display: flex;
				}
				.cancel-button {
					letter-spacing: 0px;
					color: #efefef;
					background: transparent;
					border: 0;
					outline: none;
					font-size: 16px;
					margin-right: 3rem;
					cursor: pointer;
				}
			`}</style>
		</Layout>
	);
};

export default ProfileSettings;
