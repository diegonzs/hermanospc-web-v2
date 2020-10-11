export const fetchMoreHandler = ({ fetchMore, offset, key }) => {
	fetchMore({
		variables: {
			offset,
		},
		updateQuery: (prev, { fetchMoreResult }) => {
			if (!fetchMoreResult) return prev;
			return {
				[key]: [...prev[key], ...fetchMoreResult[key]],
			};
		},
	});
};
