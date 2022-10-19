import '../styles/global/globals.css';
import '../styles/global/gridflex.css';
import { useEffect, useState } from "react";
import { Provider } from 'react-redux'
import { wrapper  } from '../redux/store';
import { AuthProvider } from '../components/Auth';
import { localStorageHelper } from "../utils/localStorageHelper";
import axios from 'axios';

const MyApp = ({Component, ...rest}) => {
  const {store, props:pageProps} = wrapper.useWrappedStore(rest);
  const getPageProps = pageProps.pageProps;
  const [auth, setAuth] = useState(null);
  
  useEffect(() => {
    const fetchData = async ()=> {
      let userToken;
      if(getPageProps.userTypes === "admin"){
        userToken = {localKey: "userToken", apiEndPoint: "/v1/auth/verify_token"}
      }
      else{
        userToken = {localKey: "meToken", apiEndPoint: "/v1/me/verify_token"}
      }
      //TODO optimizer code here, don`t repeat call axios twice
      
      const meToken =  await localStorageHelper.get(userToken.localKey);
      console.log(meToken);
      if (meToken !== undefined) {
        try {
          console.log("1.verify_token")
          const data = await axios.post(
            process.env.apiEndPoint + userToken.apiEndPoint,
            {},
            {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${meToken.token}`,
              },
            }
          ).then(response => response.data);
            console.log("2.verify_token",data)
            if (data && data.status === 200) {
              let dataAuth = {...data.data,token: meToken.token}
              /* check role */
              if (
                getPageProps.protected &&
                auth &&
                getPageProps.allowRoles &&
                getPageProps.allowRoles.indexOf(auth.role) !== -1
              ) {
                dataAuth = {...dataAuth, isAuth: true}
              }
              setAuth(dataAuth);
            }
        } catch (error) {
          setAuth({isLoggedIn: false});
          console.log("3.verify_token",error.response.data)
        }
      }
      /* no Token */
      else{
        setAuth({isLoggedIn: false});
      }
      
    }
    fetchData();
  }, [getPageProps.userTypes]);

  //console.log("Appstate",auth);
  if(getPageProps.protected && !auth){
    return (<div style={{padding: "50px 0",textAlign:"center"}}>Loading...</div> )
  }
 


  return (
      <Provider store={store}>
          <AuthProvider value={auth}>
            <Component {...getPageProps} />
          </AuthProvider>
      </Provider>
  )
}


export default MyApp
