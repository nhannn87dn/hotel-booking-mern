import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { localStorageHelper } from "../utils/localStorageHelper";

export default function useMe () {
    const router = useRouter();
    const [me, setMe] = React.useState(null);
    const [token, setToken] = React.useState(null);
      
    React.useEffect(() => {
        const fetchMe= async () => {
            console.log("0.fetchMe")
            try {
              
              const localMe = await localStorageHelper.get("me");
              if (localMe !== undefined) {
                setToken(localMe.token);
                try {
                  console.log("1.verify_token")
                  const data = await axios.post(
                    process.env.apiEndPoint + "/v1/me/verify_token",
                    {},
                    {
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localMe.token}`,
                      },
                    }
                  ).then(response => response.data);
                    console.log("2.verify_token",data)
                    if (data && data.status === 200) {
                      setMe(data.data);
                    }
              
                } catch (error) {
                  console.log("3.verify_token",error.response.data)
                }
              }else{
                router.push("/me/login")
              }
  
            } catch (error) {
              console.log("2.fetchMe",error)
            }
        }
        fetchMe();
      }, []);
    
    return {me, token}
    
}