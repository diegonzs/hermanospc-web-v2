import * as React from 'react';
import SVG from 'react-inlinesvg';
import { MainBtn } from 'components/common/main-btn';
import { Paragraph } from 'components/common/paragraph';
import { Title } from 'components/common/title';
import theme from 'theme';
import { MarginBox } from 'components/common/margin-box';

export const Landing = ({ setStep }) => {
	return (
		<>
			<div className="head-content">
				<div className="title-container">
					<Title type="h1">PC Cost Calculator</Title>
					<Paragraph>
						Don't know which components are best for your ideal gaming PC and how much would it cost? We have created
						this useful calculator for it.
					</Paragraph>
				</div>
				<MainBtn text="Get Started" onClick={() => setStep(1)} />
			</div>
			<div className="your-needs-container">
				<div className="your-needs-content">
					<span>Features</span>
					<Title type="h2">Based on your needs</Title>
					<MarginBox mt={[16]}>
						<Paragraph>
							Each player has different needs. There is a wide variety of games of different styles and requirements
							that will make the concept of the perfect computer a personal choice.
						</Paragraph>
					</MarginBox>
				</div>
				<div className="image-container">
					<img src="/images/feature-links/calculator.png" alt="" />
				</div>
			</div>
			<ul className="features">
				<li>
					<SVG src="/images/calculator/landing/save.svg" />
					<MarginBox mb={[8]}>
						<Title type="h3">SAVE MONEY</Title>
					</MarginBox>
					<Paragraph center>Get the right components you need to build your PC.</Paragraph>
				</li>
				<li>
					<SVG src="/images/calculator/landing/play.svg" />
					<MarginBox mb={[8]}>
						<Title type="h3">FOR PLAY</Title>
					</MarginBox>
					<Paragraph center>Focused on the performance of games.</Paragraph>
				</li>
				<li>
					<SVG src="/images/calculator/landing/fast.svg" />
					<MarginBox mb={[8]}>
						<Title type="h3">FAST</Title>
					</MarginBox>
					<Paragraph center>Instant results just after finished the questions.</Paragraph>
				</li>
			</ul>
			<div className="examples-container">
				<div className="exmples-image-container">
					<img src="" alt="" />
				</div>
				<div className="examples-content">
					<MarginBox mb={[8]}>
						<Title type="h2">No complications Easy to use</Title>
					</MarginBox>
					<Paragraph>
						We have worked hard to develop a friendly and practical calculator to use and deliver the best possible
						results.
					</Paragraph>
					<ul className="examples-options-list">
						<li>
							<Title type="h3">Based on questions</Title>
						</li>
						<li>
							<Title type="h3">Selection of games</Title>
						</li>
						<li>
							<Title type="h3">Specific components</Title>
						</li>
					</ul>
				</div>
			</div>
			<div className="bottom-cta">
				<MarginBox mb={[16]}>
					<Title type="h2">Your ideal gaming PC</Title>
				</MarginBox>
				<div className="paragraph-container">
					<Paragraph center>
						Get instant information about what PC components fit with your needs or Budget and how much would it cost.
					</Paragraph>
				</div>
				<MarginBox mt={[32]}>
					<MainBtn text="Get Started" onClick={() => setStep(1)} />
				</MarginBox>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.head-content {
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					margin-bottom: 96px;
					.title-container {
						display: grid;
						grid-row-gap: 40px;
						max-width: 554px;
					}
					@include for-mobile {
						flex-direction: column-reverse;
						.title-container {
							margin-top: 20px;
							grid-row-gap: 10px;
						}
					}
				}
				.your-needs-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 96px;
					@include for-mobile {
						flex-direction: column-reverse;
					}
					.your-needs-content {
						display: flex;
						flex-direction: column;
						max-width: 554px;
						span {
							color: ${theme.colors.dark.texts.text};
							font-size: 16px;
							font-weight: 600;
							margin-bottom: 8px;
						}
					}
					.image-container {
						width: 258px;
						height: 245px;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: ${theme.colors.dark.backgrounds.card};
						border-radius: 24px;
						img {
							width: 180px;
							height: auto;
						}
					}
				}
				.features {
					display: grid;
					grid-auto-flow: column;
					grid-column-gap: 32px;
					margin-bottom: 96px;
					li {
						display: flex;
						flex-direction: column;
						align-items: center;
						list-style: none;
						width: 258px;
						height: 232px;
						border-radius: 24px;
						background-color: ${theme.colors.dark.backgrounds.card};
						padding: 40px 24px;
						:global(svg) {
							width: 55px;
							margin-bottom: 17px;
						}
						:global(h3) {
							text-align: center;
						}
					}
					@include for-mobile {
						grid-auto-flow: row;
						grid-row-gap: 32px;
						justify-content: center;
					}
				}
				.examples-container {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 96px;
					@include for-mobile {
						flex-direction: column;
					}
					.exmples-image-container {
						width: 100%;
						max-width: 506px;
						height: 334px;
						border-radius: 28px;
						overflow: hidden;
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
					.examples-content {
						display: flex;
						flex-direction: column;
						max-width: 333px;
						.examples-options-list {
							display: grid;
							grid-row-gap: 19px;
							width: 100%;
							max-width: 261px;
							margin-top: 24px;
							li {
								list-style: none;
								display: flex;
								align-items: center;
								background-color: ${theme.colors.dark.backgrounds.card};
								width: 100%;
								height: 49px;
								justify-content: flex-start;
								border-radius: 12px;
								padding: 0 17px;
								cursor: pointer;
							}
						}
					}
				}
				.bottom-cta {
					display: flex;
					flex-direction: column;
					width: 100%;
					align-items: center;
					align-self: center;
					.paragraph-container {
						max-width: 435px;
					}
				}
			`}</style>
		</>
	);
};
