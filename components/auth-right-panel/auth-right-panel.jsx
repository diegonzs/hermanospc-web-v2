import * as React from 'react';
import { MainBtn } from 'components/common/main-btn';
import { SecondBtn } from 'components/common/second-btn';
import Link from 'next/link';
import { useUser } from 'hooks';
import theme from 'theme';

export const AuthRightPanel = () => {
	const user = useUser();
	return (
		<div className="container">
			{!user ? (
				<>
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
				</>
			) : (
				<div className="list">
					<div className="icon-container">
						<img className="icon-image" src="/images/icons/notification.svg" alt="" />
					</div>
					<div className="icon-container">
						<img className="icon-image" src="/images/icons/notification.svg" alt="" />
					</div>
					<div className="icon-container">
						<img className="avatar-image" src="/images/testing/user-face.png" alt="" />
					</div>
				</div>
			)}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: auto;
					grid-auto-flow: column;
					grid-column-gap: 8px;
					width: 100%;
					justify-content: end;
				}
				.list {
					display: grid;
					grid-auto-flow: column;
					grid-column-gap: 24px;
				}
				.icon-container {
					display: flex;
					width: 48px;
					height: 48px;
					border-radius: 14px;
					justify-content: center;
					align-items: center;
					background-color: ${theme.colors.dark.main.smallBtn};
					cursor: pointer;
					.icon-image {
						width: 20px;
					}
					.avatar-image {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			`}</style>
		</div>
	);
};
