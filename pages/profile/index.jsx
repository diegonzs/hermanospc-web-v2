import * as React from 'react';
import { Layout } from 'components/layout';
import { MainBtn } from 'components/common/main-btn';
import { Avatardetails } from 'components/avatar-details';

const Profile = () => {
	return (
		<Layout>
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
					<MainBtn text="Settings" type="default" onClick={() => null} />
				</div>
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
			`}</style>
		</Layout>
	);
};

export default Profile;
