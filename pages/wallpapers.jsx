import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { WallpaperElem } from 'components/wallpaper-elem';
import * as React from 'react';

const Wallpapers = () => {
	return (
		<Layout>
			<HeadTitle>Wallpapers</HeadTitle>
			<section>
				<Title type="h3">Desktop</Title>
				<ul className="desktop-list">
					<WallpaperElem />
					<WallpaperElem />
					<WallpaperElem />
					<WallpaperElem />
					<WallpaperElem />
					<WallpaperElem />
				</ul>
			</section>
			<section className="mobile-section">
				<Title type="h3">Mobile</Title>
				<ul className="mobile-list">
					<WallpaperElem isMobile />
					<WallpaperElem isMobile />
					<WallpaperElem isMobile />
					<WallpaperElem isMobile />
					<WallpaperElem isMobile />
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

export default Wallpapers;
