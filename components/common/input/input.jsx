import * as React from 'react';
import theme from 'theme';

export const Input = () => {
	return (
		<>
			<input type="text" placeholder="Email address" />
			<style jsx>{`
				input {
					width: 320px;
					background-color: ${theme.colors.dark.inputs.input};
					padding: 14px 16px;
					color: ${theme.colors.dark.texts.text};
					font-size: 14px;
					border-radius: 14px;
					border: none;
					height: 48px;
				}
			`}</style>
		</>
	);
};
