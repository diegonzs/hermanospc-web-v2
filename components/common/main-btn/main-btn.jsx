import * as React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';

/**
 * @typedef {Object} MainBtnProps
 * @property {string} text
 * @property {string} [href]
 * @property {boolean} [isDisabled]
 * @property {'header' | 'default' | 'form'} [type]
 * @property {() => void} [onClick]
 */

/**
 *
 * @param {MainBtnProps} props
 */
export const MainBtn = ({ text, href, isDisabled = false, type = 'default', onClick }) => {
	return (
		<>
			{href ? (
				<a href={href} className={`btn ${isDisabled ? 'disabled' : ''} ${type}`}>
					{text}
				</a>
			) : (
				<button
					className={`btn ${isDisabled ? 'disabled' : ''} ${type}`}
					onClick={() => (isDisabled ? console.log('esta deshabilitado') : onClick())}
				>
					{text}
				</button>
			)}
			<style jsx>{`
				.btn {
					text-decoration: none;
					display: flex;
					justify-content: center;
					align-items: center;
					border: none;
					font-weight: 600;
					color: ${theme.colors.dark.texts.textBtn};
					transition: all 0.2s ease-in-out;
					cursor: pointer;
					background-image: linear-gradient(
						180deg,
						${theme.colors.dark.main.mainBtn.top},
						${theme.colors.dark.main.mainBtn.bottom}
					);
					&:hover {
						background-image: linear-gradient(
							180deg,
							${theme.colors.dark.main.mainBtn.top},
							${theme.colors.dark.main.mainBtn.top}
						);
					}
					&:focus {
						outline: none;
					}
				}
				.disabled {
					background-color: ${theme.colors.dark.main.mainBtn.disabled};
					background-image: none;
					cursor: not-allowed;
					&:hover {
						background-color: ${theme.colors.dark.main.mainBtn.disabled};
						background-image: none;
					}
				}
				.default {
					width: 124px;
					height: 48px;
					border-radius: 14px;
					font-size: 16px;
				}
				.header {
					width: 84px;
					height: 32px;
					border-radius: 10px;
					font-size: ${theme.typografy.btnCard}px;
				}
				.form {
					width: 320px;
					height: 48px;
					border-radius: 14px;
					font-size: 16px;
				}
			`}</style>
		</>
	);
};

MainBtn.propTypes = {
	text: PropTypes.string.isRequired,
	href: PropTypes.string,
	isDisabled: PropTypes.bool,
	type: PropTypes.string,
};

MainBtn.defaultProps = {
	type: 'default',
};
