import * as React from 'react';
import { useSwrQuery, useUser } from 'hooks';
import { BlogCard } from 'components/blog-card';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { GET_ALL_LINKS, GET_FEED_LINKS, GET_FEED_ALL_LINKS_VARIABLES } from 'graphql/queries/links';
import { NetworkStatus } from '@apollo/client';
import { Loader } from 'components/common/loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchMoreHandler } from 'lib/fetch-more-handler';
import { selectedNewsVar } from 'lib/apollo-client';

const NewsPage = ({ initializing }) => {
	const user = useUser();
	const query = user ? GET_FEED_LINKS : GET_ALL_LINKS;

	const { data, loading, networkStatus, fetchMore, error } = useSwrQuery(query, {
		variables: GET_FEED_ALL_LINKS_VARIABLES(user ? user.uid : '', 0),
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'cache-and-network',
	});

	const isLoaderVisible = loading || networkStatus === NetworkStatus.refetch || initializing || !data;

	return (
		<Layout>
			<HeadTitle isNews>News</HeadTitle>
			<div className="container">
				<MarginBox mb={[15]}>
					<Title type="h3">Latest</Title>
				</MarginBox>
				{isLoaderVisible ? (
					<Loader />
				) : (
					<InfiniteScroll
						className="news-list-container"
						dataLength={data.links.length}
						next={() => fetchMoreHandler({ fetchMore, offset: data.links.length, key: 'links' })}
						hasMore={data.links_aggregate.aggregate.count > data.links.length}
						loader={<Loader />}
						scrollThreshold={1}
						endMessage={<p>There are no more :P</p>}
					>
						{data.links.map((link) => (
							<div onClick={() => selectedNewsVar(link)}>
								<BlogCard
									isNews
									key={link.id}
									uid={link.id}
									title={link.title}
									sourceImage={link.source?.favicon}
									sourceName={link.source?.name}
									coverAlt={link.title}
									cover={
										link.cloudinary_id
											? `https://res.cloudinary.com/tribuagency/image/upload/f_auto,q_70,w_260/${link.cloudinary_id}`
											: link.image
									}
								/>
							</div>
						))}
					</InfiniteScroll>
				)}
			</div>
			<style jsx global>{`
				.news-list-container {
					display: grid;
					grid-template-columns: repeat(auto-fit, 270px);
					grid-column-gap: 30px;
					grid-row-gap: 24px;
					justify-content: center;
					overflow-y: hidden !important;
				}
			`}</style>
		</Layout>
	);
};

export default NewsPage;
