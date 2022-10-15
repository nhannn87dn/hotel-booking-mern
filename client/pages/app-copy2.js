import '../styles/global/globals.css';
import '../styles/global/gridflex.css';

import { wrapper  } from '../redux/store';

const MyApp = ({Component, pageProps}) => {
  return (
      <Component {...pageProps} />
  )
}
export default wrapper.withRedux(MyApp)
