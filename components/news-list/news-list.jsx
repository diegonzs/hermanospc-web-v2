import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { selectedNewsVar } from 'lib/apollo-client';
import { fetchMoreHandler } from 'lib/fetch-more-handler';
import { BlogCard } from 'components/blog-card';
import { Loader } from 'components/common/loader';

export const NewsList = ({ fetchMore, links, totalLinks, queryKey }) => {
	return (
		<>
			<InfiniteScroll
				className="news-list-container"
				dataLength={links.length}
				next={() => fetchMoreHandler({ fetchMore, offset: links.length, key: queryKey })}
				hasMore={totalLinks > links.length}
				loader={<Loader />}
				endMessage={<p className="end-message">There are no more :P</p>}
			>
				{links.map((link) => (
					<div key={link.id} onClick={() => selectedNewsVar(link)}>
						<BlogCard
							isNews
							uid={link.id}
							title={link.title}
							sourceImage={link.source?.favicon}
							sourceName={link.source?.name}
							coverAlt={link.title}
							cover={
								link.cloudinary_id
									? `https://res.cloudinary.com/tribuagency/image/upload/f_auto,q_70,w_260/${link.cloudinary_id}`
									: link.image
							}
						/>
					</div>
				))}
			</InfiniteScroll>
			<style jsx global>{`
				.news-list-container {
					display: grid;
					grid-template-columns: repeat(auto-fit, 270px);
					grid-column-gap: 30px;
					grid-row-gap: 24px;
					justify-content: center;
					overflow-y: hidden !important;
				}
				.end-message {
					grid-column: 1 / -1;
					text-align: center;
					margin-top: 30px;
				}
			`}</style>
		</>
	);
};
