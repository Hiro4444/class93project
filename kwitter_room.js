var firebaseConfig = {
    apiKey: "AIzaSyCEuJ-GAsFAlNGr05xAmoN3p_fhU1KLnOo",
    authDomain: "kwitter-4b7fd.firebaseapp.com",
    databaseURL: "https://kwitter-4b7fd-default-rtdb.firebaseio.com",
    projectId: "kwitter-4b7fd",
    storageBucket: "kwitter-4b7fd.appspot.com",
    messagingSenderId: "1045005375139",
    appId: "1:1045005375139:web:54801859c9f461e82f9116"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();