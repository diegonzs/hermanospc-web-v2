import { Title } from 'components/common/title';
import * as React from 'react';
import theme from 'theme';

const ColorElem = ({ colorHex, colorName, isActive = false, onClick }) => {
	return (
		<div title={colorName} onClick={onClick}>
			<style jsx>{`
				div {
					background-color: ${colorHex};
					width: 21px;
					height: 21px;
					border-radius: 6px;
					border: 1px solid ${isActive ? theme.colors.dark.main.accent : theme.colors.dark.icons.iconOnly};
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export const WallpaperElem = ({ isMobile = false, colors = [], resolutions = [], cover = '' }) => {
	const [resolutionValue, setResolution] = React.useState('');
	const [colorValue, setColor] = React.useState('');
	return (
		<div className="container">
			<div className="image-container">
				<img src={cover} alt="" />
			</div>
			<ul className="colors-list">
				{colors.map((color) => (
					<ColorElem
						key={color.value}
						colorName={color.color_name}
						colorHex={color.value}
						isActive={color.color_name === colorValue}
						onClick={() => setColor(color.color_name)}
					/>
				))}
			</ul>
			<div className="bottom-container">
				{!isMobile ? (
					<select
						name="resolution"
						id="resolution"
						value={resolutionValue}
						onChange={(e) => setResolution(e.target.value)}
					>
						<option value="">Choose a resolution</option>
						{resolutions.map((resolution) => (
							<option value={resolution.value[0].text}>{resolution.value[0].text}</option>
						))}
					</select>
				) : (
					<Title type="h3">Download</Title>
				)}
				<div className="download-icon-container" title="Download">
					<img src="/images/common-icons/download.svg" />
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
					background-color: ${theme.colors.dark.backgrounds.childCard};
					overflow: hidden;
					border-radius: 20px;
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
						img {
							width: 14px;
						}
					}
				}
			`}</style>
		</div>
	);
};
