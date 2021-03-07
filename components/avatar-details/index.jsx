import React from 'react';

export const Avatardetails = ({ brotherhood, follow, widthActions, isLeader, brotherhood_role, brotherhood_name }) => {
	return (
		<div className="avatar-detail-container">
			<div>
				<img className="avatar-image" src="/images/testing/user-face.png" alt="user avatar" />
				{isLeader && (
					<img className="crown-img" src="/images/avatar-details/crown.svg" alt="I am the brotherhood leader" />
				)}
				{brotherhood && brotherhood_role && brotherhood_name && (
					<img className="brotherhood-img" src="/images/avatar-details/club-logo.jpg" alt="brotherhood logo" />
				)}
			</div>
			<div>
				<p className="title">{`andressul`}</p>
				{brotherhood && brotherhood_role && brotherhood_name && (
					<p className="subtitle">{`${brotherhood_role} · Member of ${brotherhood_name}`}</p>
				)}
				{follow && <button className="follow-link">{`Follow`}</button>}
				{widthActions && (
					<div className="actions-buttons">
						<button>{`Promote`}</button>
						<button>{`Kick`}</button>
					</div>
				)}
			</div>
			<style jsx>{`
				.avatar-detail-container {
					display: flex;
					align-items: center;
					.avatar-image {
						margin-right: 1.7rem;
					}
					.title {
						font-weight: 600;
						letter-spacing: 0px;
						color: #efefef;
						font-size: 16px;
					}
					.subtitle {
						letter-spacing: 0px;
						color: #bfbfbf;
						font-size: 15px;
					}
					.brotherhood-img {
						border: 2px solid #0effa3;
						border-radius: 10px;
						width: 30px;
						position: relative;
						left: -45px;
						margin-bottom: 2.5rem;
						margin-right: -30px;
					}
					.follow-link {
						letter-spacing: 0px;
						color: #0effa3;
						background: transparent;
						border: none;
						outline: none;
						font-size: 14px;
						cursor: pointer;
					}
					.actions-buttons button {
						background: transparent;
						border: none;
						outline: none;
						letter-spacing: 0px;
						color: #bfbfbf;
						margin-right: 1rem;
						cursor: pointer;
					}
					.crown-img {
						margin-bottom: 3.8rem;
						position: relative;
						left: -82px;
						margin-right: -12px;
					}
				}
			`}</style>
		</div>
	);
};
