import * as React from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';
import { useUser } from 'hooks';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { Loader } from 'components/common/loader';
import { NewsList } from 'components/news-list';
import { GET_ALL_LINKS, GET_FEED_LINKS, GET_FEED_ALL_LINKS_VARIABLES } from 'graphql/queries/links';

const NewsPage = ({ initializing }) => {
	const user = useUser();
	const query = user ? GET_FEED_LINKS : GET_ALL_LINKS;

	const { data, networkStatus, fetchMore, error } = useQuery(query, {
		variables: GET_FEED_ALL_LINKS_VARIABLES(user ? user.uid : '', 0),
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'cache-first',
	});

	React.useEffect(() => {
		if (error) {
			console.log('there is an error', error);
		}
	}, [error]);

	const isLoaderVisible = networkStatus === NetworkStatus.loading || initializing || !data;

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
					<NewsList
						fetchMore={fetchMore}
						totalLinks={data.links_aggregate.aggregate.count}
						links={data.links}
						queryKey="links"
					/>
				)}
			</div>
		</Layout>
	);
};

export default NewsPage;
