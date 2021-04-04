import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import * as React from 'react';
import { Form } from './form';

export const NewsletterForm = () => {
	return (
		<div className="container">
			<div className="content">
				<Title type="h2">Stay alert and get rewards!</Title>
				<Paragraph>Earlier adopters can request a username and will have unique rewards.</Paragraph>
			</div>
			<Form />
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: grid;
					grid-auto-flow: column;
					grid-column-gap: 56px;
					justify-content: center;
					width: 100%;
					@include for-mobile {
						grid-auto-flow: row;
						grid-row-gap: 30px;
					}
				}
				.content {
					display: grid;
					grid-auto-flow: row;
					grid-auto-rows: auto;
					grid-row-gap: 24px;
					max-width: 318px;
				}
			`}</style>
		</div>
	);
};
