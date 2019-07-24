import app from 'firebase/app'

const config = {
    apiKey: "AIzaSyDJ5mcwV9sL3jtT_s4Afza1lc8RJ6EIbZw",
    authDomain: "morning-coffee-544f9.firebaseapp.com",
    databaseURL: "https://morning-coffee-544f9.firebaseio.com",
    projectId: "morning-coffee-544f9",
    storageBucket: "",
    messagingSenderId: "891919689332",
    appId: "1:891919689332:web:8ea6c79263824892"
};

// Initialize Firebase
class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
  
  export default Firebase;