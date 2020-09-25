import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import React from 'react';
import theme from 'theme';

export const ComingSoonCard = () => {
	return (
		<div className="container">
			<img className="image" src="/images/testing/social-platform.png" alt="" />
			<div className="content">
				<Title type="h2">New Social Platform Coming Soon!</Title>
				<Paragraph>
					We want to create the best place in internet to get inspiration for your setup while you get fun in community.
				</Paragraph>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					align-items: center;
					justify-content: space-between;
					width: 100%;
					min-height: 285px;
					padding: 29px 40px;
					border-radius: 40px;
					background-color: ${theme.colors.dark.backgrounds.card};
					@include for-mobile {
						flex-direction: column;
						padding: 32px 16px;
					}
				}
				.image {
					background-color: ${theme.colors.dark.backgrounds.background};
					width: 373px;
					height: 228px;
					object-fit: cover;
					display: flex;
					border-radius: 20px;
					@include for-mobile {
						width: 100%;
						height: auto;
						margin-bottom: 20px;
					}
				}
				.content {
					display: grid;
					grid-auto-flow: row;
					grid-auto-rows: auto;
					grid-row-gap: 24px;
					max-width: 347px;
				}
			`}</style>
		</div>
	);
};
