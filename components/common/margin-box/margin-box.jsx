import * as React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} MarginBoxProps
 * @property {number[]} [mt]
 * @property {number[]} [mb]
 * @property {number[]} [mr]
 * @property {number[]} [ml]
 * @property {any} children
 */

/**
 *
 * @param {MarginBoxProps} props
 */
export const MarginBox = ({ children, mt, mb, mr, ml }) => {
	return (
		<div>
			{children}
			<style jsx>{`
				@import 'variables.scss';
				div {
					margin-top: ${mt ? mt[0] ?? 0 : 0}px;
					margin-bottom: ${mb ? mb[0] ?? 0 : 0}px;
					margin-left: ${ml ? ml[0] ?? 0 : 0}px;
					margin-right: ${mr ? mr[0] ?? 0 : 0}px;
					@include for-mobile {
						margin-top: ${mt ? mt[1] ?? mt[0] ?? 0 : 0}px;
						margin-bottom: ${mb ? mb[1] ?? mb[0] ?? 0 : 0}px;
						margin-left: ${ml ? ml[1] ?? ml[1] ?? 0 : 0}px;
						margin-right: ${mr ? mr[1] ?? mr[1] ?? 0 : 0}px;
					}
				}
			`}</style>
		</div>
	);
};

MarginBox.propTypes = {
	mt: PropTypes.arrayOf(PropTypes.number),
	mb: PropTypes.arrayOf(PropTypes.number),
	mr: PropTypes.arrayOf(PropTypes.number),
	ml: PropTypes.arrayOf(PropTypes.number),
};
