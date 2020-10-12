import { gql } from '@apollo/client';
import { FRAGMENT_LINKS_ALL_FIELDS } from 'graphql/fragments/links';

/**
 * QUery to fetch all links saved by an user.
 */
export const ALL_LINKS_SAVED_QUERY = gql`
	query ALL_LINKS_SAVED($userId: String, $offset: Int) {
		links_saved(where: { user_id: { _eq: $userId } }, limit: 12, offset: $offset, order_by: { created_at: desc }) {
			id
			link {
				...LinksAllFields
			}
		}
		links_saved_aggregate(where: { user_id: { _eq: $userId } }) {
			aggregate {
				count
			}
		}
	}
	${FRAGMENT_LINKS_ALL_FIELDS}
`;

/**
 * Variables ALl links saved query
 * @param {string} userId
 * @param {number} offset
 */
export const ALL_LINKS_SAVED_QUERY_VARIABLES = (userId, offset) => ({
	userId,
	offset,
});
