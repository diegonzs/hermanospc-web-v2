import { InfoCard } from 'components/common/info-card';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import * as React from 'react';
import theme from 'theme';

export const BlogCard = () => {
	return (
		<div className="container">
			<div className="image-container">
				<img src="/images/testing/blog-card.png" alt="" />
			</div>
			<div className="content-container">
				<MarginBox mb={[16]}>
					<Title type="h4">AMD Launched Its New Processors 4th Gen with top prices</Title>
				</MarginBox>
				<div className="bottom-content">
					<div className="source-content">
						<img src="" alt="" />
						<span>By Source</span>
					</div>
					<span className="read-btn">READ</span>
				</div>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					flex-direction: column;
					width: 270px;
					min-height: 236px;
					background-color: ${theme.colors.dark.backgrounds.background};
					&:hover {
						.read-btn {
							&:before {
								background-color: ${theme.colors.dark.main.accent};
								height: 2px;
							}
						}
					}
				}
				.image-container {
					width: 100%;
					height: 131px;
					img {
						width: 100%;
						object-fit: cover;
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
