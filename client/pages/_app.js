
import '../styles/globals.css';
import '../styles/gridflex.css';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

  return (
  
      <Component {...pageProps} />
   
  )
}

export default MyApp
