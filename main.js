document.getElementById("introduction").style.marginTop = 0;
document.getElementById("hamburger").style.display = "none";


check_value = document.getElementById("check").checked;


function margin_check() {
  console.log("Function margin_check() is running!");

  let check_value = document.getElementById("check").checked;
  console.log("Checkbox checked:", check_value);
  
  let navbar_height = document.getElementById("hamburger").offsetHeight;
  console.log("Navbar height:", navbar_height);

  // Corrected ID selection
  document.getElementById("home_anchor").style.color = "black";

  // Set margin correctly
  if (check_value) {
      document.getElementById("hamburger").style.display = "block";
      document.getElementById("introduction").style.marginTop = navbar_height + "px";


    } else {
      document.getElementById("introduction").style.marginTop = 0;
      document.getElementById("hamburger").style.display = "none";
  }
} document.getElementById("introduction").offsetHeight;



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAaBLFPYmSD0Im1gU8ehfazg3qNA4d2xWU",
  authDomain: "divyanshdevelop-portfolio.firebaseapp.com",
  databaseURL: "https://divyanshdevelop-portfolio-default-rtdb.firebaseio.com",
  projectId: "divyanshdevelop-portfolio",
  storageBucket: "divyanshdevelop-portfolio.appspot.com",
  messagingSenderId: "453878723274",
  appId: "1:453878723274:web:92c52e00c40b43f16cfa33"
};



firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function save(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;



  const formData = {
    name: name,
    email: email,
    message: message
};
  database.ref(name + "users/").push().set({
    name:name,
    email:email,
    message:message
  })
  





window.alert("Thank You! We will notify soon!");
document.getElementById('name').value = "";
document.getElementById('email').value = "";
document.getElementById('message').value = "";
}



function OpenFile() {
  window.open("https://divyaimage.online/", "_blank");
}

function OpenFile1() {
  window.open("#");
}
