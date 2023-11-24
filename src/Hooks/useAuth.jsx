import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovider";

const useAuth = () => {
  const authprovider = useContext(AuthContext);
  
  return authprovider;
};

export default useAuth;
