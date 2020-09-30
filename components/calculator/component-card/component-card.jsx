import { InfoCard } from 'components/common/info-card';
import { Title } from 'components/common/title';
import * as React from 'react';
import SVG from 'react-inlinesvg';
import theme from 'theme';

export const ComponentCard = () => {
	return (
		<div className="container">
			<div className="content-container">
				<div className="icon-container">{/* <SVG src="" /> */}</div>
				<div className="content">
					<Title type="h3">Gigabyte B250M</Title>
					<InfoCard>Mother Board</InfoCard>
				</div>
			</div>
			<div className="image-container"></div>
			<style jsx>{`
				.container {
					width: 100%;
					max-width: 412px;
					height: 80px;
					background-color: ${theme.colors.dark.backgrounds.card};
					border-radius: 18px;
					padding: 12px 16px 12px 23px;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.content-container {
					display: flex;
					align-items: center;
				}
				.icon-container {
					background-color: ${theme.colors.dark.backgrounds.childCard};
					display: flex;
					justify-content: center;
					align-items: center;
					width: 56px;
					height: 56px;
					margin-right: 16px;
				}
				.content {
					display: flex;
					flex-direction: column;
				}
				.image-container {
					width: 20px;
					height: 20px;
					background-color: ${theme.colors.dark.icons.iconOnly};
				}
			`}</style>
		</div>
	);
};
