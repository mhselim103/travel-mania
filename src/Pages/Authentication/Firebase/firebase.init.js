import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailazeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initailazeAuthentication;
