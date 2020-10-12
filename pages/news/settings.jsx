import * as React from 'react';
import { Layout } from 'components/layout';
import { Title } from 'components/common/title';
import { MarginBox } from 'components/common/margin-box';
import { Paragraph } from 'components/common/paragraph';
import { NewsSourcesList } from 'components/news-sources-list/news-sources-list';
import { MainBtn } from 'components/common/main-btn';
import Link from 'next/link';
import { OnlyAuthUsers } from 'components/common/only-auth-users';

const NewsSettings = ({ initializing }) => {
	return (
		<Layout>
			<OnlyAuthUsers initializing={initializing}>
				<div className="container">
					<Title type="h2" center>
						News Settings
					</Title>
					<div className="description">
						<Paragraph center>
							Tell us what sources do you want to see in your news feed. If you don't see your favorite source contact
							us to add it.
						</Paragraph>
					</div>
					<NewsSourcesList />
					<MarginBox mt={[62]}>
						<Link href="/news">
							<a>
								<MainBtn text="Back to news" />
							</a>
						</Link>
					</MarginBox>
				</div>
			</OnlyAuthUsers>
			<style jsx>{`
				.container {
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				.description {
					margin-top: 32px;
					margin-bottom: 40px;
					max-width: 445px;
				}
				a {
					text-decoration: none;
				}
			`}</style>
		</Layout>
	);
};

export default NewsSettings;
