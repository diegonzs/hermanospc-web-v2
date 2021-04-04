import React from 'react';
import theme from 'theme';

export const Select = ({ values = [] }) => {
	return (
		<>
			<select className="custom-select">
				{values.map((value, index) => (
					<option key={index} value={value}>
						{value}
					</option>
				))}
			</select>
			<style jsx>{`
				.custom-select {
					background-color: ${theme.colors.dark.inputs.input};
					color: ${theme.colors.dark.texts.text};
					outline: none;
					border: none;
					border-radius: 14px;
					max-width: 320px;
					width: 100%;
					padding: 14px;
					font-size: 14px;
				}
			`}</style>
		</>
	);
};
