var firebaseConfig = {
    apiKey: "AIzaSyBczn8qs9HmYIG4defFqXdzaLJ_vmOtfV8",
    authDomain: "gosnap-b045d.firebaseapp.com",
    projectId: "gosnap-b045d",
    storageBucket: "gosnap-b045d.appspot.com",
    messagingSenderId: "770597647888",
    appId: "1:770597647888:web:1b0399d1dde0c1b447bc95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
      document.getElementById("name").innerHTML = "Welcome " + user_name + "!";
      
  function addRoom()
  {
    room_name = document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
        changing: "add user"
    });
  window.location = "goSnap.html";
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  console.log("room_name" + Room_names);
  row="<div class='room_name' id="  + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML += row;
   });
  });
  }
  getData();
  
  function redirectToRoomName(names)
  {
    localStorage.setItem("room_name", names);
    window.location("goSnap.html");
  }