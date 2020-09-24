import * as React from 'react';
import theme from 'theme';

const TitleH1 = ({ children }) => {
	return (
		<>
			<h1>{children}</h1>
			<style jsx>{`
				@import 'variables.scss';
				h1 {
					font-size: ${theme.typografy.heading1.large}px;
					color: ${theme.colors.dark.texts.title};
					margin: 0;
					@include for-small-desktop {
						font-size: ${theme.typografy.heading1.medium}px;
					}
					@include for-mobile {
						font-size: ${theme.typografy.heading1.small}px;
					}
				}
			`}</style>
		</>
	);
};
const TitleH2 = ({ children }) => {
	return (
		<>
			<h2>{children}</h2>
			<style jsx>{`
				@import 'variables.scss';
				h2 {
					font-size: ${theme.typografy.heading2.large}px;
					color: ${theme.colors.dark.texts.title};
					margin: 0;
					@include for-small-desktop {
						font-size: ${theme.typografy.heading2.medium}px;
					}
					@include for-mobile {
						font-size: ${theme.typografy.heading2.small}px;
					}
				}
			`}</style>
		</>
	);
};
const TitleH3 = ({ children }) => {
	return (
		<>
			<h3>{children}</h3>
			<style jsx>{`
				@import 'variables.scss';
				h3 {
					font-size: ${theme.typografy.heading3.large}px;
					color: ${theme.colors.dark.texts.title};
					margin: 0;
					@include for-mobile {
						font-size: ${theme.typografy.heading3.small}px;
					}
				}
			`}</style>
		</>
	);
};
const TitleH4 = ({ children }) => {
	return (
		<>
			<h4>{children}</h4>
			<style jsx>{`
				h4 {
					font-size: ${theme.typografy.heading4.large}px;
					color: ${theme.colors.dark.texts.title};
					margin: 0;
				}
			`}</style>
		</>
	);
};

export const Title = ({ type, children }) => {
	switch (type) {
		case 'h1':
			return <TitleH1>{children}</TitleH1>;
		case 'h2':
			return <TitleH2>{children}</TitleH2>;
		case 'h3':
			return <TitleH3>{children}</TitleH3>;
		case 'h4':
			return <TitleH4>{children}</TitleH4>;
		default:
			return <TitleH1>{children}</TitleH1>;
	}
};
