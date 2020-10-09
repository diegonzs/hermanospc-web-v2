import * as React from 'react';
import { RichText } from 'prismic-reactjs';
import theme from 'theme';
import { Title } from 'components/common/title';
import { Layout } from 'components/layout';
import { Paragraph } from 'components/common/paragraph';
import { HeadTitle } from 'components/head-title';
import { getAllPostsWithSlug, getPostBySlug } from 'lib/prismic-api';
import { useRouter } from 'next/router';

const BlogPostDetail = ({ post }) => {
	const router = useRouter();

	React.useEffect(() => {
		console.log(post);
	}, [post]);

	return (
		<Layout>
			<HeadTitle smallMargin backPath="/blog">
				Blog
			</HeadTitle>
			<div className="wrapper">
				{router.isFallback ? (
					<div>Loading...</div>
				) : (
					<div className="container">
						<Title type="h2">{post.title[0].text}</Title>
						<div className="image-container">
							<img src={post.cover.url} alt={post.cover.alt} />
						</div>
						<div className="info-container">
							<div className="source">
								<img src="" alt="" />
								<Paragraph>By Source</Paragraph>
							</div>
							<span className="date">8min ago</span>
						</div>
						<div className="content">
							<RichText render={post.content} />
						</div>
						<div className="action-container">
							<Title type="h3" center>
								Do you like this Post?
							</Title>
						</div>
					</div>
				)}
			</div>
			<style jsx>{`
				.wrapper {
					width: 100%;
					display: flex;
					justify-content: center;
				}
				.container {
					max-width: 600px;
					display: flex;
					flex-direction: column;
				}
				.image-container {
					margin-top: 16px;
					margin-bottom: 8px;
					width: 100%;
					display: flex;
					img {
						width: 100%;
						height: auto;
						background-color: ${theme.colors.dark.backgrounds.childCard};
					}
				}
				.info-container {
					margin-bottom: 24px;
					display: flex;
					justify-content: space-between;
					.source {
						display: flex;
						align-items: center;
						img {
							width: 17px;
							height: 17px;
							background-color: ${theme.colors.dark.icons.iconBtn};
							margin-right: 8px;
							border-radius: 5px;
						}
					}
					.date {
						font-size: 13px;
						color: ${theme.colors.dark.icons.iconOnly};
					}
				}
				.content {
					margin-bottom: 47px;
				}
			`}</style>
			<style jsx>{`
				.content {
					:global(div, figure, table, iframe) {
						width: 100% !important;
					}
					:global(img) {
						width: 100%;
						object-fit: contain;
						height: auto;
					}
					:global(h3, h2, h4) {
						margin-top: 2.4rem;
					}
					:global(ul) {
						margin-top: 1.5rem;
						padding-left: 2.5rem;
					}
					:global(li) {
						list-style: inside;
					}
					iframe,
					img {
						margin-top: 2rem;
					}
					:global(p) {
						text-align: left;
						letter-spacing: 0px;
						margin-top: 1.5rem;
						line-height: 1.8;
						&:first-child {
							img {
								display: none !important;
							}
						}
					}
					:global(strong) {
						color: white;
					}
					:global(a) {
						text-decoration: none;
						letter-spacing: 0px;
						position: relative;
						&:before {
							content: '';
							height: 1px;
							width: 100%;
							position: absolute;
							bottom: 0.4px;
							background-color: ${theme.colors.dark.main.accent};
						}
					}
				}
			`}</style>
		</Layout>
	);
};

export async function getStaticProps({ params }) {
	const post = await getPostBySlug(params.slug);
	return {
		props: {
			post,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPostsWithSlug();
	return {
		paths: allPosts?.map(({ node }) => `/blog/${node._meta.uid}`) || [],
		fallback: true,
	};
}

export default BlogPostDetail;
