import { SWRConfig } from 'swr'

import '../styles/global/globals.css';
import '../styles/global/gridflex.css';

import { Provider } from 'react-redux'
import { store } from '../redux/store';


function MyApp({ Component, pageProps }) {
 
  return (
    <Provider store={store}>
      <SWRConfig 
      value={{
        refreshInterval: 1000 * 60 * 5, //5 minutes
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <Component {...pageProps} />
      </SWRConfig>
    </Provider>
   
  )
}

export default MyApp
