import * as React from 'react';
import { SocialIcon } from 'components/common/social-icon';

export const SocialMediaList = () => {
	return (
		<ul>
			<SocialIcon icon="Instagram" />
			<SocialIcon icon="facebook" />
			<SocialIcon icon="Twitter" />
			<SocialIcon icon="tiktok" />
			<SocialIcon icon="linkedin" />
			<SocialIcon icon="discord" />
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
			`}</style>
		</ul>
	);
};
