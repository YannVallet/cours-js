const clickButton1 = document.querySelector("#btn-1");
const clickButton2 = document.querySelector("#btn-2");
const response = document.getElementById("reponse");
const boxEnter = document.querySelector("#box");

clickButton1.addEventListener("click", () => {
  response.innerHTML = "VRAI BRAVO";
  response.style.color = "green";
});

clickButton2.addEventListener("click", () => {
  response.innerHTML = "FAUX";
  response.style.color = "red";
});

//_______________________

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

boxEnter.addEventListener("mouseenter", () => {
  boxEnter.style.background = "rgba(0,0,0,0.6)";
});
boxEnter.addEventListener("mouseout", () => {
  boxEnter.style.background = "rgba(0,0,0,1)";
});

//_______________________

// KEYPRESS EVENT

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.innerHTML = e.key;
});

// SCROLL EVENT -----------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    // scrollY recup les info du scroll, active fonction à partir de 120px
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

///--------------------------------
