import * as React from 'react';
import { Title } from 'components/common/title';
import { Layout } from 'components/layout';
import theme from 'theme';
import { Paragraph } from 'components/common/paragraph';
import { HeadTitle } from 'components/head-title';

const NewsDetail = () => {
	return (
		<Layout>
			<HeadTitle smallMargin backPath="/news">
				News
			</HeadTitle>
			<div className="wrapper">
				<div className="container">
					<Title type="h2">AMD Launched Its New Processors 4th Gen with top prices</Title>
					<div className="image-container">
						<img src="/images/testing/news-detail.png" alt="" />
					</div>
					<div className="info-container">
						<div className="source">
							<img src="" alt="" />
							<Paragraph>By Source</Paragraph>
						</div>
						<span className="date">8min ago</span>
					</div>
					<div className="content"></div>
					<div className="action-container">
						<Title type="h3" center>
							Do you like this new?
						</Title>
					</div>
				</div>
			</div>
			<style jsx>{`
				.wrapper {
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.container {
					max-width: 600px;
					display: flex;
					flex-direction: column;
				}
				.image-container {
					margin-top: 16px;
					margin-bottom: 8px;
					width: 100%;
					display: flex;
					img {
						width: 100%;
						height: auto;
					}
				}
				.info-container {
					margin-bottom: 24px;
					display: flex;
					justify-content: space-between;
					.source {
						display: flex;
						align-items: center;
						img {
							width: 17px;
							height: 17px;
							background-color: ${theme.colors.dark.icons.iconBtn};
							margin-right: 8px;
							border-radius: 5px;
						}
					}
					.date {
						font-size: 13px;
						color: ${theme.colors.dark.icons.iconOnly};
					}
				}
				.content {
					margin-bottom: 47px;
				}
			`}</style>
		</Layout>
	);
};

export default NewsDetail;
