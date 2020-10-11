import { UserContext } from 'context';
import { useContext } from 'react';

export const useUser = () => {
	return useContext(UserContext);
};
