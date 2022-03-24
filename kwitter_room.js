
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD8YRuTvDl2cvt9reyT09UIJtBk8iJluWI",
      authDomain: "kwitterapp-7b38f.firebaseapp.com",
      databaseURL: "https://kwitterapp-7b38f-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-7b38f",
      storageBucket: "kwitterapp-7b38f.appspot.com",
      messagingSenderId: "1026556035893",
      appId: "1:1026556035893:web:1e3fc7cfd365eb06fd427c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
