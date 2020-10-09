import * as React from 'react';
import { MainBtn } from 'components/common/main-btn';
import { SecondBtn } from 'components/common/second-btn';
import Link from 'next/link';

export const AuthRightPanel = () => {
	return (
		<div className="container">
			<Link href="login">
				<a>
					<SecondBtn text="Sign in" />
				</a>
			</Link>
			<Link href="login">
				<a>
					<MainBtn text="Sign up" />
				</a>
			</Link>
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: auto;
					grid-auto-flow: column;
					grid-column-gap: 8px;
					width: 100%;
					justify-content: end;
				}
			`}</style>
		</div>
	);
};
