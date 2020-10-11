import * as React from 'react';
import { SecondBtn } from 'components/common/second-btn';
import { useRouter } from 'next/router';
import { Logo } from 'components/layout/logo';
import { Title } from 'components/common/title';
import theme from 'theme';
import { Paragraph } from 'components/common/paragraph';
import { MarginBox } from 'components/common/margin-box';

const Login = () => {
	const router = useRouter();
	return (
		<div className="container">
			<div className="head-container">
				<Logo />
				<SecondBtn text="Back" onClick={() => router.back()} />
			</div>
			<div className="content">
				<Title type="h2" center>
					Join our community of tech and game enthusiasts.
				</Title>
				<ul className="social-list">
					<li>
						<div className="image-container">
							<img src="/images/icons/google-icon.svg" alt="Google Icon" />
						</div>
						<span>Continue with Google</span>
					</li>
				</ul>
				<div className="text-content">
					<MarginBox mt={[56]} mb={[16]}>
						<Paragraph center little>
							We'll never post to any of your accounts without your permission.
						</Paragraph>
					</MarginBox>
					<Paragraph center little>
						By continuing, you agree to Hermanos PC's Terms of Use and confirm that you have read Hermanos PC's Privacy
						Policy.
					</Paragraph>
				</div>
			</div>
			<style jsx>{`
				@import 'variables.scss';
				.container {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					padding: 0 20px;
				}
				.head-container {
					display: flex;
					width: 100%;
					max-width: 880px;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 200px;
					margin-top: 40px;
					@include for-mobile {
						margin-bottom: 100px;
					}
				}
				.content {
					max-width: 450px;
					display: flex;
					flex-direction: column;
					align-items: center;
					height: 100%;
					justify-content: center;
					ul {
						display: grid;
						grid-row-gap: 24px;
						max-width: 360px;
						width: 100%;
						margin-top: 64px;
						li {
							width: 100%;
							height: 48px;
							padding: 12px 24px;
							display: flex;
							align-items: center;
							background-color: white;
							border-radius: 14px;
							justify-content: flex-start;
							.image-container {
								width: 20px;
								height: 20px;
								margin-right: 50px;
								img {
									width: 100%;
									height: 100%;
									object-fit: cover;
								}
							}
							span {
								color: ${theme.colors.dark.texts.textBtn};
								font-size: 16px;
								font-weight: 600;
							}
						}
					}
				}
				.text-content {
					max-width: 454px;
				}
			`}</style>
			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
				* {
					margin: 0;
					padding: 0;
				}
				*,
				*::before,
				*::after {
					box-sizing: inherit;
				}
				html {
					box-sizing: border-box;
				}
				body {
					font-family: 'Poppins', 'sans-serif';
					font-weight: 400;
					background-color: ${theme.colors.dark.backgrounds.background};
					color: ${theme.colors.dark.texts.text};
					font-size: ${theme.typografy.paragraph}px;
					line-height: 1.6;
					overflow-x: hidden;
				}
				a {
					text-decoration: none;
				}
				button {
					font-family: 'Poppins', 'sans-serif';
				}
				li {
					list-style: none;
				}
			`}</style>
		</div>
	);
};

export default Login;
