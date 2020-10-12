import { NetworkStatus } from '@apollo/client';
import { BlogCard } from 'components/blog-card';
import { Loader } from 'components/common/loader';
import { MarginBox } from 'components/common/margin-box';
import { OnlyAuthUsers } from 'components/common/only-auth-users';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { NewsList } from 'components/news-list';
import { ALL_LINKS_SAVED_QUERY, ALL_LINKS_SAVED_QUERY_VARIABLES } from 'graphql/queries/links-saved';
import { useSwrQuery, useUser } from 'hooks';
import * as React from 'react';

const Saved = ({ initializing }) => {
	const user = useUser();

	const { data, networkStatus, fetchMore } = useSwrQuery(ALL_LINKS_SAVED_QUERY, {
		variables: ALL_LINKS_SAVED_QUERY_VARIABLES(user ? user.uid : '', 0),
		notifyOnNetworkStatusChange: true,
		fetchPolicy: 'cache-first',
	});

	const isLoaderVisible = networkStatus === NetworkStatus.loading || initializing || !data;

	let links = [];

	if (data?.links_saved) {
		links = data.links_saved.map((savedLink) => savedLink.link);
	}

	return (
		<Layout>
			<OnlyAuthUsers initializing={initializing}>
				<HeadTitle isNews>News</HeadTitle>
				<div className="container">
					<MarginBox mb={[15]}>
						<Title type="h3">Saved</Title>
					</MarginBox>
					{isLoaderVisible ? (
						<Loader />
					) : (
						<NewsList
							fetchMore={fetchMore}
							totalLinks={data.links_saved_aggregate.aggregate.count}
							links={links}
							queryKey="links_saved"
						/>
					)}
				</div>
			</OnlyAuthUsers>
		</Layout>
	);
};

export default Saved;
