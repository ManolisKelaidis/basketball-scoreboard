let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

let leader = 0;

function home1point() {
  home.textContent = parseInt(home.textContent) + 1;
}

function home2point() {
  home.textContent = parseInt(home.textContent) + 2;
}

function home3point() {
  home.textContent = parseInt(home.textContent) + 3;
}

function guest1point() {
  guest.textContent = parseInt(guest.textContent) + 1;
}

function guest2point() {
  guest.textContent = parseInt(guest.textContent) + 2;
}

function guest3point() {
  guest.textContent = parseInt(guest.textContent) + 3;
}
