import { createContext, useContext } from "react";
export const AuthContext = createContext(null);
const { Provider } = AuthContext;

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return { auth };
};

export const AuthProvider = ({ value, children }) => {
  return <Provider value={value}>{children}</Provider>;
};
