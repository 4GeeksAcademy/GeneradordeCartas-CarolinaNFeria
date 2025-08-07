import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const suits = ["♦", "♥", "♠", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateCard() {
  const suit = getRandomItem(suits);
  const value = getRandomItem(values);
  const color = (suit === "♥" || suit === "♦") ? "red" : "black";

  
  
  document.getElementById("top-suit").textContent = suit;
  document.getElementById("bottom-suit").textContent = suit;

  document.getElementById("center-value").textContent = value;

  const card = document.getElementById("card");
  card.classList.remove("red", "black");
  card.classList.add(color);
}

document.getElementById("generate").addEventListener("click", generateCard);


generateCard();
}
