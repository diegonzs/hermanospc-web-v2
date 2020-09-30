import * as React from 'react';
import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import { Form } from 'components/newsletter-form/form';

export const Subscribe = ({ setStep }) => {
	return (
		<div className="container">
			<Title center type="h2">
				Get your results sent to your inbox
			</Title>
			<div className="description">
				<Paragraph center>
					We can’t wait to pull back the curtain and give you a full breakdown of your personal PC gaming components.
					All you need to do now is enter your email below and you’ll get instant access to your results 🎉
				</Paragraph>
			</div>
			<Form onSubmit={setStep} />
			<style jsx>{`
				.container {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					height: 100%;
					justify-content: center;
				}
				.description {
					width: 100%;
					max-width: 554px;
					margin-top: 32px;
					margin-bottom: 56px;
				}
			`}</style>
		</div>
	);
};
