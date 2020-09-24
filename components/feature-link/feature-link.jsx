import * as React from 'react';
import SVG from 'react-inlinesvg';

export const FeatureLink = ({ topColor, bottomColor, title, description, image }) => {
	return (
		<div className="container">
			<div className="content">
				<img className="image" src={image} alt="" />
				<div className="arrow-container">
					<SVG src="" />
				</div>
				<span className="title">{title}</span>
				<p className="description">{description}</p>
			</div>
			<style jsx>{`
				.container {
					width: 269px;
					height: 323px;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					padding: 40px 32px;
					position: relative;
					border-radius: 32px;
					background-image: linear-gradient(180deg, ${topColor}, ${bottomColor});
				}
				.image {
					position: absolute;
					height: 200px;
					width: auto;
					top: -32px;
					right: -30px;
				}
				.arrow-container {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #ededed;
					margin-bottom: 16px;
					border-radius: 13px;
					width: 40px;
					height: 40px;
				}
				.title {
					font-size: 32px;
					font-weight: 600;
					color: #ededed;
					margin-bottom: 8px;
				}
				.description {
					color: #d6d6d6;
					font-size: 13px;
					margin: 0;
				}
			`}</style>
		</div>
	);
};
