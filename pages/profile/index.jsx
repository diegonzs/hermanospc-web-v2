import * as React from 'react';
import { Layout } from 'components/layout';
import { Avatardetails } from 'components/avatar-details';

const Profile = () => {
	return (
		<Layout>
			<Avatardetails
				brotherhood={true}
				follow={false}
				widthActions={false}
				isLeader={false}
				brotherhood_role={'Ambassador'}
				brotherhood_name={'Phoenix Gods'}
			/>
		</Layout>
	);
};

export default Profile;
