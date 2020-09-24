import * as React from 'react';
import theme from 'theme';

/**
 * @typedef {Object} MenuBtnProps
 * @property {boolean} isMenuVisible
 * @property {string} [className]
 * @property {() => void} onClick
 */

/**
 *
 * @param {*} param0
 */
export const MenuBtn = ({ isMenuVisible, className, onClick }) => {
	const [showAbove, setShowAbove] = React.useState(false);
	React.useEffect(() => {
		if (!isMenuVisible) {
			setTimeout(() => {
				setShowAbove(false);
			}, 300);
		} else {
			setShowAbove(true);
		}
	}, [isMenuVisible]);
	return (
		<div className={`menu-btn ${className} ${isMenuVisible ? 'close' : 'open'}`} onClick={onClick}>
			<style jsx>{`
				.menu-btn {
					width: 20px;
					height: 10px;
					position: relative;
					display: flex;
					z-index: ${showAbove ? 1000 : 0};
					cursor: pointer;
					&:before,
					&:after {
						content: '';
						position: absolute;
						width: 100%;
						height: 2px;
						left: 0;
						background-color: ${theme.colors.dark.main.accent};
						transition: all 0.3s ease-in-out;
					}
					&:before {
						top: 0;
					}
					&:after {
						top: calc(100% - 2px);
					}
				}
				.close {
					&:before {
						top: calc(50% - 1px);
						transform: rotateZ(45deg);
					}
					&:after {
						top: calc(50% - 1px);
						transform: rotateZ(-45deg);
					}
				}
			`}</style>
		</div>
	);
};
