import { MainBtn } from 'components/common/main-btn';
import { IconBtn } from 'components/icon-btn';
import { useUser } from 'hooks';
import Link from 'next/link';
import React from 'react';
import theme from 'theme';

export const AuthHeader = () => {
	const user = useUser();

	return (
		<div>
			{!user ? (
				<Link href="/login">
					<a>
						<MainBtn text="Sign up" type="header" />
					</a>
				</Link>
			) : (
				<div className="list">
					<IconBtn>
						<img className="notification-bell" src="/images/icons/notification.svg" alt="Notification Bell" />
					</IconBtn>
					<IconBtn>
						<img className="notification-bell" src="/images/icons/notification.svg" alt="Notification Bell" />
					</IconBtn>
					<IconBtn>
						<img className="avatar-pic" src="/images/testing/user-face.png" alt="user avatar" />
					</IconBtn>
				</div>
			)}
			<style jsx>{`
				.list {
					display: grid;
					grid-auto-flow: column;
					grid-column-gap: 16px;
				}
				.avatar-pic {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				.notificaction-bell {
					width: 13px;
				}
			`}</style>
		</div>
	);
};
