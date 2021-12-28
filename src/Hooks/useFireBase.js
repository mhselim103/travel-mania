import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  // console.log(googleProvider);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  // console.log(signInWithPopup);

  // signIn
  const signInUsingGoogle = (location, navigate) => {
    const auth = getAuth();
    // console.log("hello");
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const destination = location.state?.from || "/";
        console.log(destination);
        navigate(destination);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    });
    setIsLoading(false);
  };

  const createAccount = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsingEmailPassword = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateName = (name) => {
    console.log(name);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };
  // observe change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  return {
    signInUsingGoogle,
    user,
    setUser,
    logOut,
    setIsLoading,
    isLoading,
    createAccount,
    signInUsingEmailPassword,
    updateName,
  };
};
export default useFirebase;
