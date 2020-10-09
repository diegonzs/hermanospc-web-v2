import * as React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';

/**
 * @typedef {Object} ParagraphProps
 * @property {boolean} [center]
 * @property {boolean} [little]
 * @property {any} children
 */

/**
 *
 * @param {ParagraphProps} props
 */
export const Paragraph = ({ children, center = false, little = false }) => {
	return (
		<>
			<p className={`${little ? 'little' : ''}`}>{children}</p>
			<style jsx>{`
				p {
					font-size: ${theme.typografy.paragraph}px;
					margin: 0;
					text-align: ${center ? 'center' : 'left'};
				}
				.little {
					margin: 0;
					font-size: ${theme.typografy.littleDetail}px;
				}
			`}</style>
		</>
	);
};

Paragraph.propTypes = {
	center: PropTypes.bool,
};

Paragraph.defaultProps = {
	center: false,
};
