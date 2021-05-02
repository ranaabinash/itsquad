// Data to be load from the json file
const objUser = [
  {
    email: "magarabinash986@gmail.com",
    password: "abinash",
  },
  {
    email: "avilasha.rana0@gmail.com",
    password: "avilasha",
  },
];

function isLoggedIn() {
  if (localStorage.getItem("user")) {
    document.querySelector(".nav-links").style.display = "flex";
    document.querySelector(".input").style.display = "none";
    document.querySelector(".action").style.display = "none";
    document.querySelector(".loggedIn").style.display = "flex";
  } else {
    document.querySelector(".nav-links").style.display = "none";
    document.querySelector(".input").style.display = "flex";
    document.querySelector(".action").style.display = "flex";
    document.querySelector(".loggedIn").style.display = "none";
  }
}

// Event listener for login
document.querySelector("#login").addEventListener("click", login);
document.querySelector(".loggedIn").addEventListener("click", logout);

function login() {
  let valid = false;
  let email = document.getElementById("username");
  let password = document.getElementById("password");
  objUser.forEach((user) => {
    if (user.email == email.value && user.password == password.value) {
      valid = true;
    }
  });
  if (valid) {
    localStorage.setItem("user", email.value.toString());
    isLoggedIn();
    email.value = "";
    password.value = "";
  } else {
    alert("email or password didn't matched!!!");
  }
}

function logout() {
  localStorage.removeItem("user");
  isLoggedIn();
}

isLoggedIn();