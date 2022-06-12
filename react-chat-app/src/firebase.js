
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAg85NNghCGRtQ7QZ0cpRJQIN0F0QPDYLE",
    authDomain: "youchat-bef55.firebaseapp.com",
    projectId: "youchat-bef55",
    storageBucket: "youchat-bef55.appspot.com",
    messagingSenderId: "1045721139293",
    appId: "1:1045721139293:web:853ac1317d6694955da5b4"
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

export const db = app.firestore()


