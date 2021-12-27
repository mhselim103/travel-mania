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
import initializeAuthentication from "../Pages/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // signIn
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
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
