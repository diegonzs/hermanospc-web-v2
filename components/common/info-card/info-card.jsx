import * as React from 'react';
import theme from 'theme';

export const InfoCard = ({ children }) => {
	return (
		<>
			<p>{children}</p>
			<style jsx>{`
				p {
					margin: 0;
					font-size: 13px;
					color: ${theme.colors.dark.texts.text};
				}
			`}</style>
		</>
	);
};
