import * as React from 'react';
import { Layout } from 'components/layout';
import { Avatardetails } from 'components/avatar-details';

const Profile = () => {
	return (
		<Layout>
			<Avatardetails brotherhood={false} follow={false} />
		</Layout>
	);
};

export default Profile;
