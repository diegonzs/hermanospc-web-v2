import * as React from 'react';
import { Title } from 'components/common/title';
import { NewsNav } from 'components/news-nav';
import { SocialMediaList } from 'components/social-media-list';
import Link from 'next/link';
import theme from 'theme';
import { useRouter } from 'next/router';

export const HeadTitle = ({ children, isNews = false, smallMargin = false, backPath = '', isSSR = false }) => {
	const router = useRouter();
	return (
		<div className="container">
			{backPath ? (
				isSSR ? (
					<Link href={backPath}>
						<a className="link">
							<div className="back-container">
								<img src="/images/common-icons/chevron-left.svg" alt="" />
								<span>View All</span>
							</div>
						</a>
					</Link>
				) : (
					<div className="link" onClick={() => router.back()}>
						<div className="back-container">
							<img src="/images/common-icons/chevron-left.svg" alt="" />
							<span>View All</span>
						</div>
					</div>
				)
			) : null}
			<div className="head-content">
				<Title type="h1">{children}</Title>
				{isNews ? <NewsNav /> : <SocialMediaList />}
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.link {
					width: 80px;
					max-width: 80px;
					cursor: pointer;
				}
				.back-container {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					max-width: 80px;
					img {
						width: 7px;
						height: auto;
						transform: rotateZ(180deg);
						margin-right: 4px;
					}
					span {
						color: ${theme.colors.dark.main.accent};
						font-size: 14px;
					}
				}
				.head-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: ${smallMargin ? '52px' : '74px'};
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
