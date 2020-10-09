import { MarginBox } from 'components/common/margin-box';
import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import * as React from 'react';
import theme from 'theme';

const links = [
	{
		title: 'Razer Downloads',
		href: 'https://google.com',
	},
	{
		title: 'Unsplash',
		href: 'https://google.com',
	},
	{
		title: 'HD Walls',
		href: 'https://google.com',
	},
	{
		title: 'JustinMaller wallpapers',
		href: 'https://google.com',
	},
];

export const WallpaperRightPanel = () => {
	return (
		<div className="container">
			<Title type="h3">Other Sources</Title>
			<ul>
				{links.map((link) => (
					<li key={link.title}>
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							<img src="/images/common-icons/external-link.svg" alt="external link" />
							<Title type="h4">{link.title}</Title>
						</a>
					</li>
				))}
			</ul>
			<Title type="h3">Be featured</Title>
			<MarginBox mt={[32]}>
				<Paragraph>
					Share your pictures using our wallpapers, tag us @hermanospc and get the chance to be featured in our social
					channels.
				</Paragraph>
			</MarginBox>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					margin-top: 81px;
					flex-direction: column;
					@include for-mobile {
						margin-top: 0;
					}
				}
				ul {
					display: grid;
					grid-row-gap: 27px;
					margin-top: 38px;
					margin-bottom: 80px;
					li {
						width: 100%;
						a {
							display: flex;
							width: fit-content;
							align-items: center;
							img {
								margin-right: 24px;
								width: 18px;
								height: 18px;
								object-fit: cover;
							}
						}
					}
				}
			`}</style>
		</div>
	);
};
