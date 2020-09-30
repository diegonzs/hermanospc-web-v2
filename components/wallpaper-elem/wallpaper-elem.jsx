import { Title } from 'components/common/title';
import * as React from 'react';
import SVG from 'react-inlinesvg';
import theme from 'theme';

const ColorElem = ({ colorHex, colorName }) => {
	return (
		<div title={colorName}>
			<style jsx>{`
				div {
					background-color: ${colorHex};
					width: 21px;
					height: 21px;
					border-radius: 6px;
					border: 1px solid ${theme.colors.dark.icons.iconOnly};
				}
			`}</style>
		</div>
	);
};

export const WallpaperElem = ({ isMobile = false }) => {
	const [resolution, setResolution] = React.useState('');
	return (
		<div className="container">
			<div className="image-container">
				<img src={isMobile ? '/images/testing/mobile-wallpaper.png' : '/images/testing/desktop-wallpaper.png'} alt="" />
			</div>
			<ul className="colors-list">
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
				<ColorElem colorName="blue" colorHex="#52D876" />
			</ul>
			<div className="bottom-container">
				{!isMobile ? (
					<select name="resolution" id="resolution" value={resolution} onChange={(e) => setResolution(e.target.value)}>
						<option value="">Choose a resolution</option>
						<option value="1920x1080">1920x1080</option>
						<option value="1280x720">1280x720</option>
					</select>
				) : (
					<Title type="h3">Download</Title>
				)}
				<div className="download-icon-container" title="Download">
					<SVG src="/images/common-icons/download.svg" />
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					width: 100%;
					max-width: ${isMobile ? '134px' : '269px'};
				}
				.image-container {
					display: flex;
					width: 100%;
					height: 170px;
					margin-bottom: 8px;
					img {
						object-fit: cover;
						width: 100%;
						height: 100%;
					}
				}
				.colors-list {
					display: grid;
					grid-template-columns: repeat(auto-fit, 21px);
					grid-column-gap: 6px;
					grid-row-gap: 8px;
					margin-bottom: 13px;
				}
				.bottom-container {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.download-icon-container {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 25px;
						height: 25px;
						border-radius: 6px;
						background-color: ${theme.colors.dark.main.smallBtn};
						:global(svg) {
							width: 14px;
						}
					}
				}
			`}</style>
		</div>
	);
};
