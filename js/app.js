
var attackButton = document.getElementById('attack');
var potionButton = document.getElementById('potion');
var healthDiv = document.getElementById('health');
var yourHlthDiv = document.getElementById('yourHealth');

var gameInfo = document.getElementById('gameInfo');

var sully = {
  name: "sully",
  health: 100,
  takeDamage: function() {
    var damDone = randomNumber();
    var hlth = sully.health = parseFloat(sully.health) - damDone;
    healthDiv.innerHTML = "Monster Health: " + hlth;
    gameInfo.innerHTML = "You hit the monster for " +  damDone;
  }
}

var you = {
  name: "you",
  health: 100,
  takeDamage: function() {
    var damDone = randomNumber();
    var hlth = you.health = parseFloat(you.health) - damDone;
    yourHlthDiv.innerHTML = "Your Health: " + hlth;
    gameInfo.innerHTML = "The monster hit you, You lost " +  damDone + " health";
   }, 
   potion: function() {
    var potion = you.health = parseFloat(you.health) + 10;
    yourHlthDiv.innerHTML = "Your Health: " + potion;
   }
  
}




function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function monsterAttack() {
  you.takeDamage();
  attackButton.style.display = "inline-block";
}

function attackSequence() {
  sully.takeDamage();
  attackButton.style.display = "none";
  
  setTimeout(monsterAttack, 1700);

  if (you.health <= 0) {
    alert("You Lose");
    window.location.reload();
  } else if (sully.health <= 0) {
    alert("You win!");
    window.location.reload();
  }
}



function takePotion() {
  you.potion();
  potionButton.disabled = true;
}



attackButton.addEventListener('click', attackSequence);
potionButton.addEventListener('click', takePotion);

