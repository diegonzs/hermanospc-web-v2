import { AuthRightPanel } from 'components/auth-right-panel';
import Head from 'next/head';
import { IconBtn } from 'components/icon-btn';
import { LatestNews } from 'components/latest-news';
import * as React from 'react';
import theme from 'theme';
import { Menu } from './menu/menu';

/**
 * @typedef {Object} LayoutProps
 * @property {any} children
 * @property {any} [rightPanel]
 */

/**
 *
 * @param {LayoutProps} props
 */
export const Layout = ({ children, rightPanel }) => {
	const [optionsState, setOptionsState] = React.useState('hide');

	const updateOptionsState = () => {
		if (optionsState === 'hide') {
			setOptionsState('half');
		} else if (optionsState === 'half') {
			setOptionsState('full');
		} else {
			setOptionsState('hide');
		}
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="shorcut icon" href="/brand/favicon.png" />
			</Head>
			<div className="layout-container">
				<aside className="menu">
					<Menu />
				</aside>
				<div className="main-container">
					<main className="main">{children}</main>
				</div>
				<aside className={`options ${optionsState}`} onClick={() => updateOptionsState()}>
					<div className="auth-container">
						<AuthRightPanel />
					</div>
					<div className="grab-line" />
					{rightPanel ? rightPanel : <LatestNews />}
				</aside>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.layout-container {
					display: grid;
					grid-template-columns: 240px 1fr 400px;
					grid-template-rows: 1fr;
					position: relative;
					min-height: 100vh;
					@include for-small-desktop {
						grid-template-columns: 80px 1fr 400px;
					}
					@include for-mobile {
						grid-template-columns: 1fr;
						grid-template-rows: 50px 1fr;
					}
				}
				.menu,
				.options {
					height: 100vh;
					width: 100%;
					position: sticky;
					top: 0;
					background-color: ${theme.colors.dark.backgrounds.card};
					overflow: hidden;
				}
				.menu {
					border-radius: 0px 40px 40px 0px;
					@include for-mobile {
						height: 100%;
						width: 100%;
						position: static;
						border-radius: 0;
					}
				}
				.options {
					padding: 39px 32px;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: flex-start;
					border-radius: 40px 0px 0px 40px;
					.auth-container {
						margin-bottom: 83px;
						align-self: flex-end;
					}
					.grab-line {
						display: none;
						width: 60px;
						height: 8px;
						border-radius: 8px;
						background-color: ${theme.colors.dark.main.smallBtn};
						margin-bottom: 26px;
					}
					@include for-mobile {
						border-radius: none;
						position: fixed;
						top: calc(100% - 56px);
						height: 100vh;
						border-radius: 0;
						transition: transform 0.25s ease;
						padding: 17px 24px 0;
						border-top: 2px solid ${theme.colors.dark.main.accent};
						.auth-container {
							display: none;
						}
						.grab-line {
							display: none;
						}
					}
				}
				.hide {
					@include for-mobile {
						transform: translateY(0);
					}
				}
				.full {
					@include for-mobile {
						transform: translateY(calc(-100vh + 56px));
						border-top: none;
						.grab-line {
							display: flex;
						}
					}
				}
				.half {
					@include for-mobile {
						transform: translateY(-40vh);
						border-radius: 32px 32px 0 0;
						border-top: none;
						.grab-line {
							display: flex;
						}
					}
				}
				.main-container {
					display: flex;
					justify-content: center;
					padding: 35px 20px;
					overflow: hidden;
					@include for-mobile {
						margin-bottom: 56px;
					}
				}
				.main {
					width: 100%;
					max-width: 884px;
					background-color: ${theme.colors.dark.backgrounds.background};
					min-height: calc(100vh - 112px);
				}
			`}</style>
			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
				* {
					margin: 0;
					padding: 0;
				}
				*,
				*::before,
				*::after {
					box-sizing: inherit;
				}
				html {
					box-sizing: border-box;
				}
				body {
					font-family: 'Poppins', 'sans-serif';
					font-weight: 400;
					background-color: ${theme.colors.dark.backgrounds.background};
					color: ${theme.colors.dark.texts.text};
					font-size: ${theme.typografy.paragraph}px;
					line-height: 1.6;
					overflow-x: hidden;
				}
				a {
					text-decoration: none;
					color: inherit;
				}
				button {
					font-family: 'Poppins', 'sans-serif';
				}
				li {
					list-style: none;
				}
			`}</style>
		</>
	);
};
