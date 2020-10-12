import * as React from 'react';
import { NetworkStatus } from '@apollo/client';
import { Loader } from 'components/common/loader';
import { MarginBox } from 'components/common/margin-box';
import { OnlyAuthUsers } from 'components/common/only-auth-users';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { NewsList } from 'components/news-list';
import { useSwrQuery, useUser } from 'hooks';
import { ALL_FAVORITE_LINKS, ALL_FAVORITE_LINKS_VARIABLES } from 'graphql/queries/reactions';

const Favorite = ({ initializing }) => {
	const user = useUser();

	const { data, networkStatus, fetchMore } = useSwrQuery(ALL_FAVORITE_LINKS, {
		variables: ALL_FAVORITE_LINKS_VARIABLES(user ? user.uid : '', 0),
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'cache-first',
	});

	const isLoaderVisible = networkStatus === NetworkStatus.loading || initializing || !data;

	return (
		<Layout>
			<OnlyAuthUsers initializing={initializing}>
				<HeadTitle isNews>News</HeadTitle>
				<div className="container">
					<MarginBox mb={[15]}>
						<Title type="h3">Favorite</Title>
					</MarginBox>
					{isLoaderVisible ? (
						<Loader />
					) : (
						<NewsList
							fetchMore={fetchMore}
							totalLinks={data.favorite_links_aggregate.aggregate.count}
							links={data.favorite_links}
							queryKey="favorite_links"
						/>
					)}
				</div>
			</OnlyAuthUsers>
		</Layout>
	);
};

export default Favorite;
