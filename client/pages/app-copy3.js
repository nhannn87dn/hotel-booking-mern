import '../styles/global/globals.css';
import '../styles/global/gridflex.css';

import { Provider } from 'react-redux'
import { wrapper  } from '../redux/store';

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
              <Component {...props.pageProps} />
      </Provider>
  )
}


export default MyApp
