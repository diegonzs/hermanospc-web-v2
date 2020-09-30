import * as React from 'react';
import Link from 'next/link';
import { Layout } from 'components/layout';
import { FeatureLink } from 'components/feature-link';
import { ComingSoonCard } from 'components/coming-soon-card';
import { NewsletterForm } from 'components/newsletter-form';
import { HeadTitle } from 'components/head-title';

const Home = () => {
	return (
		<div className="home-container">
			<Layout>
				<HeadTitle>For the Community</HeadTitle>
				<ul className="feature-links-container">
					<FeatureLink
						topColor="#B84190"
						bottomColor="#B84155"
						title="News"
						description="Tech and gaming industries"
						image="/images/feature-links/calculator.png"
					/>
					<Link href="/calculator" passHref>
						<a>
							<FeatureLink
								topColor="#4159B8"
								bottomColor="#7D41B8"
								title="Calculator"
								description="How much would cost your PC"
								image="/images/feature-links/calculator.png"
							/>
						</a>
					</Link>
					<Link href="/free-to-play">
						<a>
							<FeatureLink
								topColor="#CC4F45"
								bottomColor="#B87941"
								title="Free to Play"
								description="16 PC games to play now!"
								image="/images/feature-links/free-to-play.png"
							/>
						</a>
					</Link>
				</ul>
				<div className="coming-soon-card-container">
					<ComingSoonCard />
				</div>
				<NewsletterForm />
			</Layout>
			<style jsx>{`
				@import 'variables.scss';
				.feature-links-container {
					display: grid;
					grid-auto-columns: auto;
					grid-auto-flow: column;
					grid-column-gap: 38px;
					margin-bottom: 48px;
					justify-content: center;
					@include for-mobile {
						justify-content: start;
						overflow-x: scroll;
						overflow-y: hidden;
						width: 100vw;
						margin-left: -50vw;
						margin-right: -50vw;
						position: relative;
						padding: 0 20px;
						padding-top: 30px;
						left: 50%;
						right: 50%;
						margin-bottom: 56px;
					}
				}
				.coming-soon-card-container {
					margin-bottom: 44px;
				}
			`}</style>
		</div>
	);
};

export default Home;
