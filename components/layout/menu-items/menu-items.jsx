import * as React from 'react';
import { useRouter } from 'next/router';
import SVG from 'react-inlinesvg';
import theme from 'theme';

const items = [
	{
		id: 'home',
		title: 'home',
		image: '/images/menu-icons/home.svg',
	},
	{
		id: 'brotherhoods',
		title: 'Brotherhoods',
		image: '/images/menu-icons/brotherhood.svg',
	},
	{
		id: '3drooms',
		title: '3D Rooms',
		image: '/images/menu-icons/3d-room.svg',
	},
	{
		id: 'news',
		title: 'News',
		image: '/images/menu-icons/home.svg',
	},
	{
		id: 'calculator',
		title: 'Calculator',
		image: '/images/menu-icons/calculator.svg',
	},
	{
		id: 'free-to-play',
		title: 'Free to play',
		image: '/images/menu-icons/free-to-play.svg',
	},
	{
		id: 'wallspapers',
		title: 'Wallspapers',
		image: '/images/menu-icons/home.svg',
	},
];

const Item = ({ isActive, image, title }) => {
	return (
		<li className={`item ${isActive ? 'item-active' : ''}`}>
			<SVG className="icon" src={image} />
			<span className="text">{title}</span>
			<style jsx>{`
				@import 'variables.scss';
				.item {
					display: flex;
					padding-left: 25px;
					cursor: pointer;
					& > :global(svg) {
						width: 22px;
					}
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
		</li>
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
				.list-items {
					display: grid;
					grid-auto-rows: auto;
					grid-auto-flow: row;
					grid-row-gap: 31px;
					width: 100%;
					@include for-mobile {
						position: absolute;
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
