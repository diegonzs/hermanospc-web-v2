import * as React from 'react';
import PropTypes from 'prop-types';
import theme from 'theme';

/**
 * @typedef {Object} IconBtnProps
 * @property {string} [className] - custom className
 * @property {() => void} [onClick] - onClick handler
 * @property {any} children
 */

/**
 *
 * @param {IconBtnProps} props
 */
export const IconBtn = ({ children, onClick, className }) => {
	return (
		<div className={`container ${className ? className : ''}`} onClick={() => (onClick ? onClick() : null)}>
			{children}
			<style jsx>{`
				.container {
					width: 32px;
					height: 32px;
					border-radius: 10px;
					background-color: ${theme.colors.dark.main.smallBtn};
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</div>
	);
};

IconBtn.propTypes = {
	onClick: PropTypes.func,
	className: PropTypes.string,
};
