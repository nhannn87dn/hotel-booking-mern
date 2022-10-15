import '../styles/global/globals.css';
import '../styles/global/gridflex.css';

import { wrapper  } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default wrapper.withRedux(MyApp)
