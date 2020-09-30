import { Paragraph } from 'components/common/paragraph';
import { ShareButton } from 'components/common/share-button';
import { Title } from 'components/common/title';
import * as React from 'react';
import theme from 'theme';
import { ComponentCard } from '../component-card';

export const ResultPage = () => {
	return (
		<div>
			<div className="head-container">
				<Title type="h2">Your PC cost is around $1,200</Title>
				<div className="button-container">
					<ShareButton value="facebook" />
					<ShareButton value="twitter" />
				</div>
			</div>
			<Paragraph>This price is from Amazon US. Prices could be slightly different.</Paragraph>
			<div className="content">
				<div className="components">
					<Title type="h3">Components</Title>
					<ul className="components-list">
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
						<ComponentCard />
					</ul>
					<Paragraph>Disclaimer: Some links has referred program.</Paragraph>
				</div>
				<div className="more-options">
					<div className="video-container">
						<Title type="h3">Similar performance</Title>
						<div className="video" />
					</div>
					<div className="also-like-container">
						<Title type="h3">Similar performance</Title>
						<div className="guides-container">
							<div className="guide"></div>
							<div className="guide"></div>
						</div>
					</div>
					<div className="inspiration-container">
						<Title type="h3">Get inspiration</Title>
						<div className="community-container">
							<span>Explorer</span>
							<Title type="h4">Community</Title>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.head-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 40px;
					.button-container {
						display: grid;
						grid-auto-flow: column;
						grid-column-gap: 16px;
					}
					@include for-mobile {
						flex-direction: column;
						.button-container {
							margin-top: 20px;
						}
					}
				}
				.content {
					margin-top: 32px;
					display: flex;
					.components {
						margin-right: 31px;
						.components-list {
							margin-top: 16px;
							display: grid;
							grid-row-gap: 12px;
							margin-bottom: 32px;
						}
					}
					.more-options {
						display: grid;
						grid-row-gap: 32px;
						align-content: start;
						.video-container {
							display: grid;
							grid-row-gap: 16px;
							.video {
								width: 100%;
								max-width: 441px;
								height: 248px;
								background-color: ${theme.colors.dark.backgrounds.card};
								border-radius: 20px;
							}
						}
						.also-like-container {
							display: grid;
							grid-row-gap: 16px;
							align-content: start;
							.guides-container {
								display: flex;
								justify-content: space-between;
								width: 100%;
							}
							.guide {
								width: 184px;
								height: 234px;
								background-color: #b1b1b1;
								border-radius: 32px;
								display: flex;
								align-items: center;
								justify-content: center;
							}
						}
						.inspiration-container {
							display: grid;
							grid-row-gap: 16px;
							align-content: start;
							.community-container {
								width: 100%;
								height: 100px;
								display: flex;
								flex-direction: column;
								align-items: flex-start;
								justify-content: center;
								background-color: ${theme.colors.dark.backgrounds.card};
								border-radius: 15px;
								padding: 0 24px;
								span {
									color: ${theme.colors.dark.main.accent};
									font-size: 16px;
									font-weight: 600;
								}
							}
						}
					}
					@include for-mobile {
						flex-direction: column;
						.components {
							margin-right: 0;
							margin-bottom: 20px;
						}
						.more-options {
							.also-like-container {
								.guides-container {
									display: flex;
									flex-direction: column;
									align-items: center;
									.guide {
										margin-bottom: 20px;
									}
								}
							}
						}
					}
				}
			`}</style>
		</div>
	);
};
