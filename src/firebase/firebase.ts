import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBatTI3QBsev4N4NHyOVCSSmGzvJvE6ftA',
    authDomain: 'linkup-a14d2.firebaseapp.com',
    databaseURL: 'https://linkup-a14d2.firebaseio.com',
    projectId: 'linkup-a14d2',
    storageBucket: 'linkup-a14d2.appspot.com',
    messagingSenderId: '442553114639',
    appId: '1:442553114639:web:27e1f181d15921736a037a',
    measurementId: 'G-VF47NRGDP9',
  }

firebase.initializeApp(firebaseConfig);
 
  export default firebase