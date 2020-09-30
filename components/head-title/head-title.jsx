import { Title } from 'components/common/title';
import { SocialMediaList } from 'components/social-media-list';
import * as React from 'react';

export const HeadTitle = ({ children }) => {
	return (
		<div className="head-content">
			<Title type="h1">{children}</Title>
			<SocialMediaList />
			<style jsx>{`
				@import 'variables.scss';
				.head-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 74px;
					@include for-mobile {
						flex-direction: column;
						align-items: flex-start;
						margin-bottom: 20px;
					}
				}
			`}</style>
		</div>
	);
};
