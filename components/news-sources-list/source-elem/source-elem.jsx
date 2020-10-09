import * as React from 'react';
import { Switch } from 'components/common/switch';
import { Title } from 'components/common/title';

export const SourceElem = () => {
	return (
		<li className="container">
			<div className="content-container">
				<div className="image-container">
					<img src="" alt="" />
				</div>
				<Title type="h3">By source</Title>
			</div>
			<Switch isActive={false} />
			<style jsx>{`
				.container {
					display: flex;
					width: 281px;
					align-items: center;
					justify-content: space-between;
				}
				.content-container {
					display: flex;
					align-items: center;
					.image-container {
						width: 24px;
						height: 24px;
						display: flex;
						margin-right: 24px;
						background-color: red;
						img {
							width: 100%;
							height: auto;
							object-fit: contain;
						}
					}
				}
			`}</style>
		</li>
	);
};
