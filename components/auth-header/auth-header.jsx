import { MainBtn } from 'components/common/main-btn';
import Link from 'next/link';
import React from 'react';

export const AuthHeader = () => {
	return (
		<div>
			<Link href="/login">
				<a>
					<MainBtn text="Sign up" type="header" />
				</a>
			</Link>
			<style jsx>{`
				a {
					text-decoration: none;
				}
			`}</style>
		</div>
	);
};
