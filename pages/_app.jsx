import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useFirebaseUser } from 'hooks';
import { useApollo } from 'lib/apollo-client';
import { ToastContainer } from 'react-toastify';
import { UserContext } from 'context';

const MyApp = ({ Component, pageProps }) => {
	const [currentToken, setCurrentToken] = React.useState();
	const [initializing, setInitializing] = React.useState(true);

	const user = useFirebaseUser(setCurrentToken, setInitializing);

	const apolloClient = useApollo(pageProps.initialApolloState, currentToken);

	React.useEffect(() => {
		if (user) {
			setCurrentToken(user.token);
		}
	}, [user]);

	return (
		<ApolloProvider client={apolloClient}>
			<UserContext.Provider value={user}>
				<Component {...pageProps} initializing={initializing} />
				<ToastContainer position="bottom-center" />
			</UserContext.Provider>
		</ApolloProvider>
	);
};

export default MyApp;
