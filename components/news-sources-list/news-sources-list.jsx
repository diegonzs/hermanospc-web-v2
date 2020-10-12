import * as React from 'react';
import { useQuery } from '@apollo/client';
import { SourceElem } from './source-elem';
import { FETCH_ALL_SOURCES, FETCH_ALL_SOURCES_VARIABLES } from 'graphql/queries/sources';
import { useUser } from 'hooks';
import { Loader } from 'components/common/loader';

export const NewsSourcesList = () => {
	const user = useUser();

	const { data, loading, error } = useQuery(FETCH_ALL_SOURCES, {
		variables: FETCH_ALL_SOURCES_VARIABLES(user ? user.uid : ''),
	});

	React.useEffect(() => {
		if (error) {
			console.log(error);
		}
	}, [error]);

	let sources = [];

	if (loading || !data) {
		return <Loader />;
	}

	if (data?.links_sources && data?.users_sources) {
		const userSourcesId = data.users_sources.map((elem) => elem.source_id);
		sources = data.links_sources.map((source) => {
			const value = { ...source, isActive: userSourcesId.includes(source.id) };
			return value;
		});
	}

	return (
		<ul className="list">
			{sources.map((source) => (
				<SourceElem key={source.id} isActive={source.isActive} name={source.name} favicon={source.favicon} />
			))}
			<style jsx>{`
				.list {
					display: grid;
					grid-row-gap: 48px;
				}
			`}</style>
		</ul>
	);
};
