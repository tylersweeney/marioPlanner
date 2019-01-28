import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAwiTGSDu8kTL3mg075yCXja21fJEy5yW0",
    authDomain: "ty-sweeney-planner.firebaseapp.com",
    databaseURL: "https://ty-sweeney-planner.firebaseio.com",
    projectId: "ty-sweeney-planner",
    storageBucket: "ty-sweeney-planner.appspot.com",
    messagingSenderId: "580728948536"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;