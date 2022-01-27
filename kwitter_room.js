 var firebaseConfig = {
    apiKey: "AIzaSyAZ4rww0h7PswmZ_dGHqzQUqGRjxyIon4w",
    authDomain: "kwitter-613d2.firebaseapp.com",
    databaseURL: "https://kwitter-613d2-default-rtdb.firebaseio.com",
    projectId: "kwitter-613d2",
    storageBucket: "kwitter-613d2.appspot.com",
    messagingSenderId: "336054980708",
    appId: "1:336054980708:web:711f9f363885e3ed164f71"
  };


  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");


  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addroom()
  {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
          purpose:"Adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
  }

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      
      });});}
getData();

function redirectToRoomName(name)
{
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}