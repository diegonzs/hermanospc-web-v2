import * as React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';

/**
 * @typedef {Object} SecondBtnProps
 * @property {string} text
 * @property {string} [href]
 * @property {boolean} [isDisabled]
 * @property {'header' | 'default'} [type]
 */

/**
 *
 * @param {SecondBtnProps} props
 */
export const SecondBtn = ({ text, href, isDisabled = false, type = 'default' }) => {
	return (
		<>
			{href ? (
				<a href={href} className={`btn ${isDisabled ? 'disabled' : ''} ${type}`}>
					{text}
				</a>
			) : (
				<button className={`btn ${isDisabled ? 'disabled' : ''}`}>{text}</button>
			)}
			<style jsx>{`
				.btn {
					text-decoration: none;
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					font-weight: 600;
					color: ${theme.colors.dark.texts.title};
					transition: all 1s ease-in-out;
					background-color: transparent;
				}
				.default {
					padding: 0 32px;
					height: 48px;
					border-radius: 14px;
					font-size: 16px;
				}
				.header {
					padding: 0 19px;
					height: 32px;
					border-radius: 10px;
					font-size: ${theme.typografy.btnCard}px;
					&:hover {
						color: ${theme.colors.dark.main.accent};
						background-color: transparent;
					}
				}
			`}</style>
		</>
	);
};

SecondBtn.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
};

SecondBtn.defaultProps = {
	type: 'default',
};
