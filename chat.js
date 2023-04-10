let playerHealth = 100;
let enemyHealth = 100;
let enemiesDefeated = 0;

// Act 1: The Journey Begins
alert(`You are a farmer who dreams of becoming a fighter. You leave your home and begin your journey to win a land.`);
alert(`As you walk through the forest, you come across a group of fighters who offer to join your quest.`);
let fighterCount = prompt(`How many fighters do you want to join your quest?`);

// Act 2: The First Battle
alert(`You and your fighters come across a band of thieves who have stolen a valuable artifact. Do you want to confront them?`);
let battleOneChoice = prompt(`1. Confront them\n2. Avoid them`);

if (battleOneChoice == "1") {
  alert(`You and your fighters confront the thieves and engage in battle.`);
  while (playerHealth > 0 && enemyHealth > 0) {
    let playerAttack = Math.floor(Math.random() * 20) + 10;
    let enemyAttack = Math.floor(Math.random() * 20) + 10;
    playerHealth -= enemyAttack;
    enemyHealth -= playerAttack;
    alert(`Your health: ${playerHealth}\nEnemy health: ${enemyHealth}`);
  }
  
  if (playerHealth <= 0) {
    alert(`You lost the battle and returned to the last checkpoint.`);
    playerHealth = 100;
    enemyHealth = 100;
  } else {
    alert(`You won the battle and gained valuable experience.`);
    playerHealth = 100;
    enemyHealth = 100;
    enemiesDefeated++;
  }
} else {
  alert(`You avoided the thieves and continued on your journey.`);
}

// Act 3: The Second Battle
alert(`You and your fighters come across a group of trolls blocking your path. Do you want to engage them?`);
let battleTwoChoice = prompt(`1. Engage them\n2. Find another way`);

if (battleTwoChoice == "1") {
  alert(`You and your fighters engage the trolls in battle.`);
  while (playerHealth > 0 && enemyHealth > 0) {
    let playerAttack = Math.floor(Math.random() * 20) + 10;
    let enemyAttack = Math.floor(Math.random() * 20) + 10;
    playerHealth -= enemyAttack;
    enemyHealth -= playerAttack;
    alert(`Your health: ${playerHealth}\nEnemy health: ${enemyHealth}`);
  }
  
  if (playerHealth <= 0) {
    alert(`You lost the battle and returned to the last checkpoint.`);
    playerHealth = 100;
    enemyHealth = 100;
  } else {
    alert(`You won the battle and gained valuable experience.`);
    playerHealth = 100;
    enemyHealth = 100;
    enemiesDefeated++;
  }
} else {
  alert(`You found another way and continued on your journey.`);
}

// Act 4: The Final Battle
alert(`You and your fighters finally reach your destination and face your toughest challenge yet - a final battle against the Evil Lord. Do you want to engage him?`);
let battleThreeChoice = prompt(`1. Engage him\n2. Find another way`);

if (battleThreeChoice == "1") {
  alert(`You and your fighters engage the Evil Lord in battle.`);
  while (playerHealth > 0 && enemyHealth > 0) {
    let playerAttack = Math.floor(Math.random() * 20) + 10;
    let enemyAttack = Math.floor(Math.random() * 20) + 10;
    playerHealth -= enemyAttack;
  }}

  enemyHealth -= playerAttack;
alert(`Your health: ${playerHealth}\nEnemy health: ${enemyHealth}`);
