import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.confiq";
const provider = new GoogleAuthProvider();

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };


  const authInfo = {
    loading,
    user,
    setUser,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

Authprovider.propTypes = {
  children: PropTypes.node,
};

export default Authprovider;
