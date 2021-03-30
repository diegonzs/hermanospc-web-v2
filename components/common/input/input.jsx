import * as React from 'react';
import theme from 'theme';

export const Input = ({ placeholder, CustomStyle = {} }) => {
	return (
		<>
			<input type="text" placeholder={placeholder} style={CustomStyle} />
			<style jsx>{`
				input {
					max-width: 320px;
					width: 100%;
					background-color: ${theme.colors.dark.inputs.input};
					padding: 14px 16px;
					color: ${theme.colors.dark.texts.text};
					font-size: 14px;
					border-radius: 14px;
					border: none;
					height: 48px;
					outline: none;
				}
			`}</style>
		</>
	);
};
