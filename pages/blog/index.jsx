import { BlogCard } from 'components/blog-card';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import * as React from 'react';

const Blog = () => {
	return (
		<Layout>
			<HeadTitle>Blog</HeadTitle>
			<div className="container">
				<MarginBox mb={[15]}>
					<Title type="h3">Recent</Title>
				</MarginBox>
				<ul>
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</ul>
			</div>
			<style jsx>{`
				.contianer {
					width: 100%;
					display: flex;
					flex-direction: column;
				}
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

export default Blog;
