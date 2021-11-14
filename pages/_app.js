import '../styles/globals.css'
import React, { useContext, useReducer, useEffect} from 'react'
import AppStore from '../components/store'
import reducer from '../components/reducer'
function MyApp({ Component, pageProps }) {
  const initialState = useContext(AppStore);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
		<>
				<AppStore.Provider value={{ state, dispatch }}>
					<Component {...pageProps} />
				</AppStore.Provider>
		</>
	);
}

export default MyApp
