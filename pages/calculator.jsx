import * as React from 'react';
import { Layout } from 'components/layout';
import { Landing } from 'components/calculator/landing';
import { Question } from 'components/calculator/question/question';
import { Subscribe } from 'components/calculator/subscribe';
import { ResultPage } from 'components/calculator/result-page';

const options = [
	{
		value: 'a',
		label: 'Question A',
	},
	{
		value: 'b',
		label: 'Question B',
	},
];

const setComponent = (step, setStep) => {
	switch (step) {
		case 0:
			return <Landing setStep={setStep} />;
		case 1:
			return (
				<Question
					setStep={() => setStep(2)}
					title="Question #1"
					description="Don't know which components are best for your ideal PC gamer and how much would it cost? We have created this
					useful calculator for it."
					options={options}
				/>
			);
		case 2:
			return <Subscribe setStep={() => setStep(3)} />;
		case 3:
			return <ResultPage />;
		default:
			return <Landing setStep={setStep} />;
	}
};

const Calculator = () => {
	const [step, setStep] = React.useState(0);
	return <Layout>{setComponent(step, setStep)}</Layout>;
};

export default Calculator;
