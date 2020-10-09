import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { WallpaperElem } from 'components/wallpaper-elem';
import { getAllWallpapers } from 'lib/prismic-api';
import * as React from 'react';

const Wallpapers = ({ allMobileWallpapers, allDesktopWallpapers }) => {
	return (
		<Layout>
			<HeadTitle>Wallpapers</HeadTitle>
			<section>
				<Title type="h3">Desktop</Title>
				<ul className="desktop-list">
					{allDesktopWallpapers.map((elem) => (
						<WallpaperElem
							key={elem.node._meta.uid}
							colors={elem.node.colors}
							resolutions={elem.node.resolutions}
							cover={elem.node.cover.url}
						/>
					))}
				</ul>
			</section>
			<section className="mobile-section">
				<Title type="h3">Mobile</Title>
				<ul className="mobile-list">
					{allMobileWallpapers.map((elem) => (
						<WallpaperElem isMobile key={elem.node._meta.uid} colors={elem.node.colors} cover={elem.node.cover.url} />
					))}
				</ul>
			</section>
			<style jsx>{`
				.desktop-list {
					display: grid;
					grid-template-columns: repeat(auto-fit, 269px);
					grid-column-gap: 36px;
					grid-row-gap: 25px;
					margin-top: 12px;
					justify-content: center;
				}
				.mobile-section {
					margin-top: 43px;
				}
				.mobile-list {
					display: grid;
					justify-content: center;
					grid-template-columns: repeat(auto-fit, 134px);
					grid-column-gap: 53px;
					grid-row-gap: 25px;
					margin-top: 12px;
				}
			`}</style>
		</Layout>
	);
};

export async function getStaticProps() {
	const allWallpapers = await getAllWallpapers();
	const allMobileWallpapers = allWallpapers?.allWallpaper_mobiles?.edges;
	const allDesktopWallpapers = allWallpapers?.allWallpaper_desks?.edges;
	return {
		props: {
			allMobileWallpapers,
			allDesktopWallpapers,
		},
		revalidate: 1,
	};
}

export default Wallpapers;
