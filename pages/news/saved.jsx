import { BlogCard } from 'components/blog-card';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import * as React from 'react';

const Saved = () => {
	return (
		<Layout>
			<HeadTitle isNews>News</HeadTitle>
			<div className="container">
				<MarginBox mb={[15]}>
					<Title type="h3">Saved</Title>
				</MarginBox>
				<ul>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
					<BlogCard
						isNews
						title="AMD Launched Its New Processors 4th Gen with top prices"
						cover="/images/testing/blog-card.png"
					/>
				</ul>
			</div>
			<style jsx>{`
				ul {
					display: grid;
					grid-template-columns: repeat(auto-fit, 270px);
					grid-column-gap: 30px;
					grid-row-gap: 24px;
					justify-content: center;
				}
			`}</style>
		</Layout>
	);
};

export default Saved;
