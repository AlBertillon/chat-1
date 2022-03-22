import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import {createContext} from 'react';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBV5dUCpwJYdGSl46Flm_pegALeWmn3jkA",
  authDomain: "chat-react-30537.firebaseapp.com",
  projectId: "chat-react-30537",
  storageBucket: "chat-react-30537.appspot.com",
  messagingSenderId: "1051454507651",
  appId: "1:1051454507651:web:55b5b56290543bed0769b6",
  measurementId: "G-ZFQ6FJNCE9"
};

const app = initializeApp(firebaseConfig);
app()
export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    app,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

