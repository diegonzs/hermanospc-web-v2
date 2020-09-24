import * as React from 'react';
import { Layout } from 'components/layout';
import { Title } from 'components/common/title';
import { SocialIcon } from 'components/common/social-icon/social-icon';
import { FeatureLink } from 'components/feature-link';
import { ComingSoonCard } from 'components/coming-soon-card';
import { NewsletterForm } from 'components/newsletter-form';

const Home = () => {
	return (
		<div className="home-container">
			<Layout>
				<div className="head-content">
					<Title type="h1">For the Community</Title>
					<ul className="social-media-list">
						<SocialIcon icon="facebook" />
						<SocialIcon icon="facebook" />
						<SocialIcon icon="facebook" />
						<SocialIcon icon="facebook" />
						<SocialIcon icon="facebook" />
						<SocialIcon icon="facebook" />
					</ul>
				</div>
				<ul className="feature-links-container">
					<FeatureLink
						topColor="#B84190"
						bottomColor="#B84155"
						title="News"
						description="Tech and gaming industries"
						image="/images/feature-links/calculator.png"
					/>
					<FeatureLink
						topColor="#4159B8"
						bottomColor="#7D41B8"
						title="Calculator"
						description="How much would cost your PC"
						image="/images/feature-links/calculator.png"
					/>
					<FeatureLink
						topColor="#CC4F45"
						bottomColor="#B87941"
						title="Free to Play"
						description="16 PC games to play now!"
						image="/images/feature-links/free-to-play.png"
					/>
				</ul>
				<div className="coming-soon-card-container">
					<ComingSoonCard />
				</div>
				<NewsletterForm />
			</Layout>
			<style jsx>{`
				.head-content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 74px;
				}
				.social-media-list {
					display: grid;
					margin: 0;
					padding: 0;
					grid-auto-flow: column;
					grid-auto-columns: auto;
					grid-column-gap: 8px;
				}
				.feature-links-container {
					display: grid;
					grid-auto-columns: auto;
					grid-auto-flow: column;
					grid-column-gap: 38px;
					margin-bottom: 48px;
				}
				.coming-soon-card-container {
					margin-bottom: 44px;
				}
			`}</style>
		</div>
	);
};

export default Home;
