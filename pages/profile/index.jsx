import React, { useState } from 'react';
import { Layout } from 'components/layout';
import { MainBtn } from 'components/common/main-btn';
import RightPanelProfile from './right_panel';
import { Avatardetails } from 'components/avatar-details';

const Profile = () => {
	const [TabAction, setTabAction] = useState('post');
	return (
		<Layout rightPanel={<RightPanelProfile />}>
			<div className="header-menu">
				<Avatardetails
					brotherhood={true}
					follow={false}
					widthActions={false}
					isLeader={false}
					brotherhood_role={'Ambassador'}
					brotherhood_name={'Phoenix Gods'}
				/>
				<div className="menu-buttons">
					<button className="sign-out">Sign out</button>
					<MainBtn text="Settings" type="default" href="/profile-settings" />
				</div>
			</div>
			<div className="item-row-info">
				<div className="info-items">
					<button className={TabAction == 'post' && 'active'} onClick={() => setTabAction('post')}>
						Posts
					</button>
					<button className={TabAction == 'specs' && 'active'} onClick={() => setTabAction('specs')}>
						Specs
					</button>
				</div>
				{TabAction == 'post' && (
					<div className="item-row-container">
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
					</div>
				)}
				{TabAction == 'specs' && (
					<div className="item-row-container">
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
						<div className="item-card" />
					</div>
				)}
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.header-menu {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.menu-buttons {
					display: flex;
				}
				.sign-out {
					letter-spacing: 0px;
					color: #efefef;
					background: transparent;
					border: 0;
					outline: none;
					font-size: 16px;
					margin-right: 3rem;
					cursor: pointer;
				}
				.item-row-container {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
				}
				.item-row-container .item-card {
					background: url(images/profile-page/pic-user-post.jpg) no-repeat;
					height: 177px;
					border-radius: 24px;
					max-width: 278px;
					margin-bottom: 1rem;
				}
				@media only screen and (max-width: 767.9px) {
					.item-row-container {
						display: block;
					}
					.item-row-container .item-card {
						margin: auto;
						margin-bottom: 1rem;
					}
					.header-menu {
						display: block;
					}
					.menu-buttons {
						margin-top: 2rem;
					}
				}
				@media (min-width: 768px) and (max-width: 991.9px) {
					.item-row-container .item-card {
						margin-right: 0.5rem;
					}
				}
				.item-row-info .info-items button {
					letter-spacing: 0px;
					color: #bfbfbf;
					background: transparent;
					border: 0;
					outline: none;
					font-size: 16px;
					margin-right: 2rem;
					cursor: pointer;
				}
				.item-row-info {
					margin-top: 2rem;
				}
				.info-items {
					margin-bottom: 1rem;
				}
				.active {
					color: #efefef !important;
				}
			`}</style>
		</Layout>
	);
};

export default Profile;
