import * as React from 'react';
import PropTypes from 'prop-types';

function createContent(newContent) {
	return {
		__html: newContent,
	};
}
/**
 * @typedef {Object} NewsContentProps
 * @property {string} [content]
 */
/**
 * Component to show the content detail with the correct styles.
 * @param {NewsContentProps} props
 */
export const NewsContent = ({ content = '' }) => {
	let newContent = '';
	if (content) {
		newContent = content.split('\\n').join('<br />');
	}
	return <div className="news-content" dangerouslySetInnerHTML={createContent(newContent)} />;
};

NewsContent.propTypes = {
	content: PropTypes.string,
};

NewsContent.defaultProps = {
	content: '',
};
