import firebase from './firebase'

const config ={
    apiKey: "AIzaSyAvbVTLUSOZox6jaPCcouxDMWjW9w3jA9E",
    authDomain: "fir-cloud-messaging-8c319.firebaseapp.com",
    projectId: "fir-cloud-messaging-8c319",
    storageBucket: "fir-cloud-messaging-8c319.appspot.com",
    messagingSenderId: "354309744553",
    appId: "1:354309744553:web:bd9a133677212c96eb46b8"
}
firebase.initializeApp(config)
 
export default firebase