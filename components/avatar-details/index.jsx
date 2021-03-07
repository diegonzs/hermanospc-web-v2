import React from 'react';

export const Avatardetails = ({ brotherhood, follow }) => {
	return (
		<div className="avatar-detail-container">
			<div>
				{brotherhood && (
					<img className="brotherhood-img" src="/images/avatar-details/club-logo.jpg" alt="brotherhood logo" />
				)}
				<img className="avatar-image" src="/images/testing/user-face.png" alt="user avatar" />
			</div>
			<div>
				<p className="title">{`andressul`}</p>
				{brotherhood && <p className="subtitle">{`Ambassador · Member of Phoenix Gods`}</p>}
				{follow && <button className="follow-link">{`Follow`}</button>}
			</div>
			<style jsx>{`
				.avatar-detail-container {
					display: flex;
					align-items: center;
					${brotherhood && 'margin-left: -1.9rem;'}
					.avatar-image {
						margin-right: 1.5rem;
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
						left: 64%;
						margin-bottom: 2.5rem;
					}
					.follow-link {
						letter-spacing: 0px;
						color: #0effa3;
						background: transparent;
						border: none;
						outline: none;
						font-size: 14px;
					}
				}
			`}</style>
		</div>
	);
};
