import '../styles/globals.css'
import React, { useContext, useReducer, useEffect} from 'react'
import AppStore from '../components/store'
import reducer from '../components/reducer'
import { ApolloProvider } from '@apollo/client/react';
import client from '../apollo/client';
function MyApp({ Component, pageProps }) {
  const initialState = useContext(AppStore);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
		<>
			<ApolloProvider client={client}>
				<AppStore.Provider value={{ state, dispatch }}>
					<Component {...pageProps} />
				</AppStore.Provider>
			</ApolloProvider>
		</>
	);
}

export default MyApp
