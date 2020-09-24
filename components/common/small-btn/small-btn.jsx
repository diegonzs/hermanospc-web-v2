import * as React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';

/**
 * @typedef {Object} SmallBtnProps
 * @property {string} text
 * @property {string} [href]
 * @property {boolean} [isDisabled]
 */

/**
 *
 * @param {SmallBtnProps} props
 */
export const SmallBtn = ({ text, href, isDisabled = false }) => {
	return (
		<>
			{href ? (
				<a href={href} className={`btn ${isDisabled ? 'disabled' : ''}`}>
					{text}
				</a>
			) : (
				<span className={`btn ${isDisabled ? 'disabled' : ''}`}>{text}</span>
			)}
			<style jsx>{`
				.btn {
					text-decoration: none;
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					color: ${theme.colors.dark.main.accent};
					font-size: 14px;
					width: fit-content;
					position: relative;
					&:before {
						content: '';
						top: calc(100% + 2.5px);
						left: 0;
						width: 100%;
						height: 2px;
						background-color: transparent;
						transition: all 0.2s ease-in-out;
						position: absolute;
					}
					&:hover {
						&:before {
							background-color: ${theme.colors.dark.main.accent};
							height: 2px;
						}
					}
				}
			`}</style>
		</>
	);
};

SmallBtn.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	isDisabled: PropTypes.bool,
};
