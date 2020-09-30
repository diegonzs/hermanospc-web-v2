import { MainBtn } from 'components/common/main-btn';
import { MarginBox } from 'components/common/margin-box';
import { Paragraph } from 'components/common/paragraph';
import { RadioButtons } from 'components/common/radio-buttons';
import { SecondBtn } from 'components/common/second-btn';
import { Title } from 'components/common/title';
import React from 'react';
import theme from 'theme';

export const Question = ({ setStep, title, description, options }) => {
	const [selectedOption, setSelectedOption] = React.useState(null);
	return (
		<div className="container">
			<div className="head-content">
				<div className="progress-bar-container">
					<div className="progress-bar" />
					<Title type="h3">50%</Title>
				</div>
			</div>
			<div className="content">
				<MarginBox mb={[32]}>
					<Title type="h2" center>
						{title}
					</Title>
				</MarginBox>
				<MarginBox mb={[64]}>
					<Paragraph center>{description}</Paragraph>
				</MarginBox>
				<RadioButtons
					options={options}
					selectedOption={selectedOption}
					setOption={(value) => setSelectedOption(value)}
				/>
				<div className="button-container">
					<SecondBtn text="Previous" />
					<MainBtn text="Next" isDisabled={!selectedOption} onClick={() => setStep()} />
				</div>
			</div>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					max-width: 884px;
				}
				.head-content {
					display: flex;
					width: 100%;
					justify-content: center;
					align-items: center;
					margin-bottom: 64px;
					.progress-bar-container {
						display: flex;
						align-items: center;
						.progress-bar {
							width: 160px;
							height: 16px;
							border-radius: 8px;
							border: 2px solid ${theme.colors.dark.main.accent};
							overflow: hidden;
							position: relative;
							margin-right: 24px;
							&:before {
								content: '';
								position: absolute;
								left: 0;
								top: 0;
								width: 50%;
								height: 100%;
								background-color: ${theme.colors.dark.main.accent};
							}
						}
					}
				}
				.content {
					max-width: 550px;
					.button-container {
						margin-top: 60px;
						display: flex;
						justify-content: center;
					}
				}
			`}</style>
		</div>
	);
};
