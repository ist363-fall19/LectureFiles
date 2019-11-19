import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

import {
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  FirebaseAuthConsumer,
  IfFirebaseUnAuthed
} from "@react-firebase/auth";

import { FirestoreProvider } from "@react-firebase/firestore";

import { firebaseConfig } from "./config";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import './App.css';

import Home from "./Home";
import Admin from "./Admin";
import About from "./About";



class App extends React.Component {
  user = {};
  loggedIn = false;
  render() {
    return (
      <div>
        <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirestoreProvider {...firebaseConfig} firebase={firebase}>
      
        <IfFirebaseUnAuthed>
        {() => {
                  return (
                    <button
                    onClick={() => {
                      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                      firebase.auth().signInWithPopup(googleAuthProvider);
                    }}
                  >
                    Sign In with Google
                  </button>
                  )
        }}
      
        </IfFirebaseUnAuthed>
        <IfFirebaseAuthed>
                {() => {
                  return (
                    <div>
                    <FirebaseAuthConsumer>
                      {({ isSignedIn, user, providerId }) => {
                        return (
                          <div>Welcome: {user.displayName}</div>
                            
                        );
                      }}
                    </FirebaseAuthConsumer>
                    <button
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  Sign Out
                </button>
                </div>
                  )}}
          </IfFirebaseAuthed>
          
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <IfFirebaseAuthed>
                {() => {
                  return (
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  )
                }}
              </IfFirebaseAuthed>
              <IfFirebaseAuthed>
                {() => {
                  return (
                    <li>
                      <Link to="/admin/new">Add Post</Link>
                    </li>
                  )
                }}
              </IfFirebaseAuthed>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <IfFirebaseAuthed>
                {() => {
                  return (
                    <Route path="/admin">
                      <Admin />
                    </Route>
                  )}}
              </IfFirebaseAuthed>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </FirestoreProvider>
      </FirebaseAuthProvider>
     
      </div>
      
    )
  }
  
}

export default App;
