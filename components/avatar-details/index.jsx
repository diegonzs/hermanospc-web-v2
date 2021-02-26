import React from 'react';

export const Avatardetails = () => {
	return (
		<div className="avatar-detail-container">
			<div>
				<img className="avatar-image" src="/images/testing/user-face.png" alt="" />
			</div>
			<div>
				<p className="title">{`andressul`}</p>
				<p className="subtitle">{`Ambassador · Member of Phoenix Gods`}</p>
			</div>
			<style jsx>{`
				.avatar-detail-container {
					display: flex;
					align-items: center;
					.avatar-image {
						margin-right: 1rem;
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
				}
			`}</style>
		</div>
	);
};
