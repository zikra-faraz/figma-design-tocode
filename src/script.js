let shift = document.querySelector("#shiftbtn");
let secondBtn = document.querySelector("#secondShiftBtn");
let androidLarge1 = document.getElementById("Android-large-1");
let androidLarge2 = document.getElementById("Android-large-2");
let signUpBtn = document.getElementById("signupBtn");
let androidLarge6 = document.getElementById("Android-large-6");
let loginLink = document.getElementById("loginLink");
let loginSection = document.getElementById("login");
let registerSection = document.getElementById("register");
let singupLink = document.getElementById("singupLink");

// console.log(group1Svg);

shift.addEventListener("click", function () {
  androidLarge1.style.display = "none";
  androidLarge2.style.display = "block";
});
secondShiftBtn.addEventListener("click", function () {
  androidLarge1.style.display = "block";
  androidLarge2.style.display = "none";
});

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  androidLarge6.scrollIntoView({ behavior: "smooth" });
});
loginLink.addEventListener("click", function (event) {
  // Prevent default link behavior
  event.preventDefault();

  // Hide the register section
  loginSection.style.display = "block";

  // Show the login section
  registerSection.style.display = "none";
});
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  androidLarge6.scrollIntoView({ behavior: "smooth" });
});
singupLink.addEventListener("click", function (event) {
  // Prevent default link behavior
  event.preventDefault();

  // Hide the register section
  loginSection.style.display = "none";

  // Show the login section
  registerSection.style.display = "block";
});
singupLink.addEventListener;
