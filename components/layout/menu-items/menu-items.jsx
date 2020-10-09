import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import theme from 'theme';

const items = [
	{
		id: 'home',
		title: 'home',
		image: '/images/menu-icons/home.svg',
		path: '/',
	},
	{
		id: 'brotherhoods',
		title: 'Brotherhoods',
		image: '/images/menu-icons/brotherhood.svg',
		path: '/',
	},
	{
		id: '3drooms',
		title: '3D Rooms',
		image: '/images/menu-icons/3d-room.svg',
		path: '/',
	},
	{
		id: 'news',
		title: 'News',
		image: '/images/menu-icons/home.svg',
		path: '/news',
	},
	{
		id: 'calculator',
		title: 'Calculator',
		image: '/images/menu-icons/calculator.svg',
		path: '/calculator',
	},
	{
		id: 'free-to-play',
		title: 'Free to play',
		image: '/images/menu-icons/free-to-play.svg',
		path: '/free-to-play',
	},
	{
		id: 'blog',
		title: 'Blog',
		image: '/images/menu-icons/home.svg',
		path: '/blog',
	},
	{
		id: 'wallpapers',
		title: 'Wallpapers',
		image: '/images/menu-icons/home.svg',
		path: '/wallpapers',
	},
];

const Item = ({ isActive, image, title, path }) => {
	return (
		<Link href={path}>
			<a>
				<li className={`item ${isActive ? 'item-active' : ''}`}>
					<SVG className="home-icon" src={image} />
					<span className="text">{title}</span>
				</li>
				<style jsx>{`
					@import 'variables.scss';
					.item {
						display: flex;
						padding-left: 25px;
						cursor: pointer;
						&:before {
							content: '';
							position: absolute;
							left: 0;
							height: 25px;
							width: 5px;
							background-color: ${isActive ? theme.colors.dark.main.accent : 'transparent'};
						}
						&:hover {
							.text {
								color: ${theme.colors.dark.main.accent};
								margin-left: 30px;
							}
						}
					}
					.text {
						margin-left: 30px;
						transition: color 0.2s ease;
						color: ${isActive ? theme.colors.dark.icons.iconOnlyActive : theme.colors.dark.icons.iconOnly};
						font-weight: 600;
						@include for-small-desktop {
							display: none;
						}
						@include for-mobile {
							display: inline;
						}
					}
				`}</style>
				<style jsx global>{`
					.item {
						.home-icon {
							width: 22px;
							.a {
								transition: all 0.2s ease;
								fill: ${theme.colors.dark.icons.iconOnly};
							}
						}
						&:hover {
							.home-icon {
								.a {
									fill: ${theme.colors.dark.main.accent};
								}
							}
						}
					}
					.item-active {
						.home-icon {
							.a {
								color: white;
								fill: ${theme.colors.dark.icons.iconOnlyActive};
							}
						}
					}
				`}</style>
			</a>
		</Link>
	);
};

export const MenuItems = ({ isMenuVisible }) => {
	const router = useRouter();
	const filteredItems = items.filter((e) => router.pathname.includes(e.id));

	return (
		<ul className={`list-items ${isMenuVisible ? 'show-mobile-menu' : ''}`}>
			{items.map((item) => (
				<Item
					{...item}
					key={item.id}
					isActive={router.pathname.includes(item.id) || (item.id === 'home' && !filteredItems.length)}
				/>
			))}
			<style jsx>{`
				@import 'variables.scss';
				:global(body) {
					overflow: ${isMenuVisible ? 'hidden' : 'unset'};
					opacity: 1;
				}
				.list-items {
					display: grid;
					grid-auto-rows: auto;
					grid-auto-flow: row;
					grid-row-gap: 31px;
					width: 100%;
					@include for-mobile {
						position: fixed;
						top: -100vh;
						left: 0;
						width: 100%;
						height: 100vh;
						background-color: ${theme.colors.dark.backgrounds.card};
						transition: transform 0.3s ease;
						align-content: center;
						z-index: 100;
					}
				}
				.show-mobile-menu {
					@include for-mobile {
						transform: translateY(100vh);
					}
				}
			`}</style>
		</ul>
	);
};
