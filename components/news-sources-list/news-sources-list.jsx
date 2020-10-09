import * as React from 'react';
import { SourceElem } from './source-elem';

export const NewsSourcesList = () => {
	return (
		<ul className="list">
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<SourceElem />
			<style jsx>{`
				.list {
					display: grid;
					grid-row-gap: 48px;
				}
			`}</style>
		</ul>
	);
};
