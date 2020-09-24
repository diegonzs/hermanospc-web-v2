import * as React from 'react';
import { MainBtn } from 'components/common/main-btn';
import { SecondBtn } from 'components/common/second-btn';

export const AuthRightPanel = () => {
	return (
		<div className="container">
			<SecondBtn text="Sign in" href="/" />
			<MainBtn text="Sign up" href="/" />
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
