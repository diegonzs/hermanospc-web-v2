import { InfoCard } from 'components/common/info-card';
import { Title } from 'components/common/title';
import * as React from 'react';
import theme from 'theme';

export const NewsCard = ({ title, description, id, source, image }) => {
	return (
		<div className="container">
			<div className="head-content">
				<img src={image} alt="" />
				<Title type="h3">{title}</Title>
			</div>
			<div className="description">
				<InfoCard>{description}</InfoCard>
			</div>
			<div className="bottom-content">
				<div className="source-content">
					<img src={source.icon} alt="" />
					<span>{source.name}</span>
				</div>
				<span className="read-btn">READ</span>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					flex-direction: column;
					width: 336px;
					padding: 18px 24px 13px;
					min-height: 180px;
					border-radius: 31px;
					background-color: ${theme.colors.dark.backgrounds.childCard};
					cursor: pointer;
					&:hover {
						.read-btn {
							&:before {
								background-color: ${theme.colors.dark.main.accent};
								height: 2px;
							}
						}
					}
					@include for-mobile {
						width: 327px;
						padding: 16px 21px 16px;
						min-height: unset;
					}
				}
				.head-content {
					display: flex;
					margin-bottom: 16px;
					align-items: center;
					img {
						width: 62px;
						height: 62px;
						object-fit: cover;
						border-radius: 19px;
						margin-right: 24px;
						background-color: #597185;
					}
					@include for-mobile {
						margin-bottom: 8px;
						img {
							width: 48px;
							height: 48px;
							border-radius: 14px;
							margin-right: 16px;
						}
					}
				}
				.description {
					max-width: 260px;
					margin-bottom: 13px;
					@include for-mobile {
						display: none;
					}
				}
				.bottom-content {
					display: flex;
					justify-content: space-between;
				}
				.source-content {
					display: flex;
					align-items: center;
					img {
						width: 12px;
						height: 12px;
						object-fit: cover;
						background-color: #597185;
						margin-right: 8px;
					}
					span {
						font-size: 13px;
						color: ${theme.colors.dark.texts.text};
						@include for-mobile {
							font-size: 12px;
						}
					}
				}
				.read-btn {
					font-size: 14px;
					font-weight: 600;
					color: ${theme.colors.dark.main.accent};
					position: relative;
					&:before {
						content: '';
						width: 100%;
						height: 2px;
						background-color: transparent;
						position: absolute;
						left: 0;
						top: calc(100% + 2.5px);
						transition: background-color 0.2s ease-in-out;
					}
					@include for-mobile {
						font-size: 12px;
					}
				}
			`}</style>
		</div>
	);
};
