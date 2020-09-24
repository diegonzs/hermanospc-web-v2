import * as React from 'react';
import theme from 'theme';

export const Paragraph = ({ children }) => {
	return (
		<>
			<p>{children}</p>
			<style jsx>{`
				p {
					font-size: ${theme.typografy.paragraph}px;
					margin: 0;
				}
			`}</style>
		</>
	);
};
