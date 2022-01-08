var firebaseConfig = {
  apiKey: "AIzaSyC5m_obTGcd5XK0NzV1uphsGE4b8uD0cQA",
  authDomain: "ace-chat-database.firebaseapp.com",
  databaseURL: "https://ace-chat-database-default-rtdb.firebaseio.com",
  projectId: "ace-chat-database",
  storageBucket: "ace-chat-database.appspot.com",
  messagingSenderId: "420065474067",
  appId: "1:420065474067:web:2e837e59a5ca51230831e6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "Ace-chat_page.html";
}
 
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
 
}
 
getData();
 
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "Ace-chat_page.html";
}
 
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

