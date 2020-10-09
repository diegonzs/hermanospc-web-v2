import * as React from 'react';
import Link from 'next/link';
import { Icon } from 'components/common/icon';

export const NewsNav = () => {
	return (
		<ul>
			<Link href="/news/settings">
				<a>
					<Icon src="/images/icons/settings.svg" />
				</a>
			</Link>
			<Link href="/news/saved">
				<a>
					<Icon src="/images/social-media/linkedin.svg" />
				</a>
			</Link>
			<Link href="/news/favorite">
				<a>
					<Icon src="/images/icons/heart.svg" />
				</a>
			</Link>
			<style jsx>{`
				@import 'variables.scss';
				ul {
					display: grid;
					margin: 0;
					padding: 0;
					grid-auto-flow: column;
					grid-auto-columns: auto;
					grid-column-gap: 8px;
					@include for-mobile {
						margin-top: 8px;
					}
				}
				a {
					cursor: pointer;
					text-decoration: none;
				}
			`}</style>
		</ul>
	);
};
