import * as React from 'react';
import { IconBtn } from 'components/icon-btn';
import { Logo } from '../logo';
import { MenuBtn } from '../menu-btn';
import { MenuItems } from '../menu-items';
import { AuthHeader } from 'components/auth-header';

export const Menu = () => {
	const [isMenuVisible, setIsMenuVisible] = React.useState(false);
	return (
		<div className="menu-container">
			<Logo />
			<MenuItems isMenuVisible={isMenuVisible} />
			<IconBtn onClick={() => null} className="hide-mobile">
				K
			</IconBtn>
			<div className="auth-container">
				<AuthHeader />
				<MenuBtn
					isMenuVisible={isMenuVisible}
					className="only-mobile"
					onClick={() => setIsMenuVisible(!isMenuVisible)}
				/>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.menu-container {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					padding-top: 43px;
					padding-bottom: 32px;
					height: 100%;
					@include for-mobile {
						flex-direction: row;
						padding: 0 20px;
					}
					& > :global(.hide-mobile) {
						@include for-mobile {
							display: none;
						}
					}
				}
				.auth-container {
					display: none;
					grid-auto-flow: column;
					grid-auto-columns: auto;
					grid-column-gap: 20px;
					align-items: center;
					@include for-mobile {
						display: grid;
					}
				}
			`}</style>
		</div>
	);
};
