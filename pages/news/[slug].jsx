import * as React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import moment from 'moment';
import theme from 'theme';
import { NextSeo } from 'next-seo';
import { selectedNewsVar } from 'lib/apollo-client';
import { Title } from 'components/common/title';
import { Layout } from 'components/layout';
import { Paragraph } from 'components/common/paragraph';
import { HeadTitle } from 'components/head-title';
import { useUser } from 'hooks';
import { NewsContent } from 'components/news-content';
import { Loader } from 'components/common/loader';
import { GET_LINK_BY_ID, GET_LINK_BY_ID_SEO, GET_LINK_BY_ID_VARIABLES } from 'graphql/queries/links';

const NewsDetail = ({ parseResponse }) => {
	const router = useRouter();
	const user = useUser();
	const { data, loading } = useQuery(GET_LINK_BY_ID, {
		//@ts-ignore
		variables: GET_LINK_BY_ID_VARIABLES(user ? user.uid : '', router.query.slug),
		fetchPolicy: 'cache-first',
	});

	let news;
	const selectedNews = selectedNewsVar();
	if (data?.links_by_pk) {
		news = data.links_by_pk;
	} else if (!!selectedNews) {
		news = selectedNews;
	} else if (parseResponse?.data?.links_by_pk) {
		news = parseResponse.data.links_by_pk;
	}

	return (
		<Layout>
			{parseResponse?.data?.links_by_pk && (
				<NextSeo
					title={parseResponse.data.links_by_pk.title}
					openGraph={{
						url: `https://news.hermanospc.co/news-detail/${router.query.slug}`,
						title: parseResponse.data.links_by_pk.title,
						description: parseResponse.data.links_by_pk.description,
						images: [{ url: parseResponse.data.links_by_pk.image }],
					}}
				/>
			)}
			<HeadTitle smallMargin backPath="/news">
				News
			</HeadTitle>
			<div className="wrapper">
				{loading && !!news ? (
					<Loader />
				) : (
					<div className="container">
						<Title type="h2">{news.title}</Title>
						<div className="image-container">
							<img src={news.image} alt={news.title} />
						</div>
						<div className="info-container">
							<div className="source">
								<img src={news.source.favicon} alt={news.source.name} />
								<Paragraph>By {news.source.name}</Paragraph>
							</div>
							<span className="date">{moment(news.created_at).fromNow()}</span>
						</div>
						<div className="content">
							<NewsContent content={news.source.is_allow ? news.content : news.description} />
						</div>
						<div className="action-container">
							<Title type="h3" center>
								Do you like this new?
							</Title>
						</div>
					</div>
				)}
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
			<style jsx>{`
				.content {
					:global(div, figure, table, iframe) {
						width: 100% !important;
					}
					:global(img) {
						width: 100%;
						object-fit: contain;
						height: auto;
					}
					:global(h3, h2, h4) {
						margin-top: 2.4rem;
					}
					:global(ul) {
						margin-top: 1.5rem;
						padding-left: 2.5rem;
					}
					:global(li) {
						list-style: inside;
					}
					iframe,
					img {
						margin-top: 2rem;
					}
					:global(p) {
						text-align: left;
						letter-spacing: 0px;
						margin-top: 1.5rem;
						line-height: 1.8;
						&:first-child {
							img {
								display: none !important;
							}
						}
					}
					:global(strong) {
						color: white;
					}
					:global(a) {
						text-decoration: none;
						letter-spacing: 0px;
						position: relative;
						&:before {
							content: '';
							height: 1px;
							width: 100%;
							position: absolute;
							bottom: 0.4px;
							background-color: ${theme.colors.dark.main.accent};
						}
					}
				}
			`}</style>
		</Layout>
	);
};

NewsDetail.getInitialProps = async ({ req, query }) => {
	let parseResponse;
	if (req) {
		const response = await fetch(process.env.NEXT_PUBLIC_HASURA_ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query: GET_LINK_BY_ID_SEO(query.slug) }),
		});
		parseResponse = await response.json();
	}
	return {
		parseResponse,
	};
};

export default NewsDetail;
