import React from 'react';
import theme from 'theme';

export const Textarea = ({ placeholder, value = '' }) => {
	return (
		<>
			<textarea className="custom-textarea" placeholder={placeholder}>
				{value}
			</textarea>
			<style jsx>{`
				.custom-textarea {
					outline: none;
					background-color: ${theme.colors.dark.inputs.input};
					border: none;
					border-radius: 14px;
					max-width: 320px;
					width: 100%;
					height: 92px;
					padding: 14px;
					color: ${theme.colors.dark.texts.text};
					font-size: 14px;
				}
			`}</style>
		</>
	);
};
