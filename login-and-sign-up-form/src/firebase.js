
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBvT8AKvLlJ-Nn4DcRRvWTyCVWG0OWqUEY",
    authDomain: "login-form-6d7e4.firebaseapp.com",
    projectId: "login-form-6d7e4",
    storageBucket: "login-form-6d7e4.appspot.com",
    messagingSenderId: "891015121290",
    appId: "1:891015121290:web:9f7c3ae46763372d7aa073"
}

const app = firebase.initializeApp(config)

export const auth = app.auth()