import * as React from 'react';
import { BlogCard } from 'components/blog-card';
import { MarginBox } from 'components/common/margin-box';
import { Title } from 'components/common/title';
import { HeadTitle } from 'components/head-title';
import { Layout } from 'components/layout';
import { getAllPosts } from 'lib/prismic-api';

const Blog = ({ allPosts }) => {
	return (
		<Layout>
			<HeadTitle>Blog</HeadTitle>
			<div className="container">
				<MarginBox mb={[15]}>
					<Title type="h3">Recent</Title>
				</MarginBox>
				<ul>
					{allPosts.map((post) => (
						<BlogCard
							key={post.node._meta.uid}
							title={post.node.title[0].text}
							cover={post.node.cover.url}
							coverAlt={post.node.cover.alt}
							uid={post.node._meta.uid}
						/>
					))}
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

export async function getStaticProps() {
	const allPosts = await getAllPosts();
	return {
		props: {
			allPosts,
		},
		revalidate: 1,
	};
}

export default Blog;
