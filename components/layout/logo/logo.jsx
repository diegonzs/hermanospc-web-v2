import * as React from 'react';

export const Logo = () => {
	return (
		<>
			<img src="/brand/logo-complete.png" alt="logo" className="big-logo" />
			<img src="/brand/logo-small.png" alt="" className="small-logo" />
			<style jsx>{`
				@import 'variables.scss';
				.big-logo {
					@include for-small-desktop {
						display: none;
					}
				}
				.small-logo {
					display: none;
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
