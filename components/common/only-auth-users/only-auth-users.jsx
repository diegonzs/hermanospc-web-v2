import { useUser } from 'hooks';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Loader } from '../loader';

export const OnlyAuthUsers = ({ initializing, children }) => {
	const user = useUser();
	const router = useRouter();

	React.useEffect(() => {
		if (!initializing && !user) {
			router.push('/login');
		}
	}, [initializing, user]);

	return (
		<>
			{initializing || !user ? (
				<div>
					<Loader />
				</div>
			) : (
				children
			)}
			<style jsx>{`
				div {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</>
	);
};
