import * as React from 'react';
import Link from 'next/link';

export const Logo = () => {
	return (
		<>
			<Link href="/">
				<a>
					<img src="/brand/logo-complete.png" alt="logo" className="big-logo" />
					<img src="/brand/logo-small.png" alt="" className="small-logo" />
				</a>
			</Link>
			<style jsx>{`
				@import 'variables.scss';
				a {
					text-decoration: none;
				}
				.big-logo {
					cursor: pointer;
					@include for-small-desktop {
						display: none;
					}
				}
				.small-logo {
					display: none;
					cursor: pointer;
					@include for-small-desktop {
						display: flex;
						width: 35px;
					}
					@include for-mobile {
						width: 23px;
					}
				}
			`}</style>
		</>
	);
};
