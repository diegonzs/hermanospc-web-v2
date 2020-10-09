import * as React from 'react';
import theme from 'theme';

export const Switch = ({ isActive }) => {
	const [active, setActive] = React.useState(isActive);
	return (
		<div className={`container ${active ? 'active' : ''}`} onClick={() => setActive(!active)}>
			<div className="ball"></div>
			<style jsx>{`
				.container {
					width: 44px;
					height: 24px;
					border-radius: 12px;
					background-color: ${theme.colors.dark.icons.iconOnly};
					border: 2px solid ${theme.colors.dark.icons.iconBtn};
					padding: 3px;
					display: flex;
					transition: all 0.25s ease-in-out;
					cursor: pointer;
					.ball {
						width: 14px;
						height: 14px;
						border-radius: 50%;
						background-color: ${theme.colors.dark.icons.iconBtn};
						transition: all 0.25s ease-in-out;
					}
				}
				.active {
					background-color: ${theme.colors.dark.main.darkDetailAccent};
					border: 2px solid ${theme.colors.dark.main.detailAccent};
					.ball {
						background-color: ${theme.colors.dark.main.detailAccent};
						transform: translateX(19px);
					}
				}
			`}</style>
		</div>
	);
};
