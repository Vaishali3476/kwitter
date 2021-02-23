
//ADD YOUR FIREBASE LINKS
var config = {
  apiKey: "AIzaSyCjtDXu7NrIfMgRv_50Erq5b6RL7pM-n-I",
  authDomain: "kwitter-91017.firebaseapp.com",
  databaseURL: "https://kwitter-91017-default-rtdb.firebaseio.com",
  projectId: "kwitter-91017",
  storageBucket: "kwitter-91017.appspot.com",
  messagingSenderId: "457495189105",
  appId: "1:457495189105:web:530527904776e18984edd0"
};
// Initialize Firebase

firebase.initializeApp(config);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
