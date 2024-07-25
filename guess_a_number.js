let givenNumber1;

function type_a_number() {
  givenNumber1 = parseInt(prompt("Saisissez un nombre"));
  console.log("Le nombre saisi est :", givenNumber1);
  return givenNumber1;
}

// Définir la constante numberToGuess qui est 22
const numberToGuess = 22;

// Définir la fonction didIWin qui prend en paramètre givenNumber
function didIWin(givenNumber) {
  if (givenNumber < numberToGuess) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > numberToGuess) {
    alert("Plus petit");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}

// Définir la fonction gamePlay
function gamePlay() {
  let found = false;

  while (!found) {
    // Demander à l'utilisateur un nombre
    let userInput = prompt("Devinez le nombre :");

    // Convertir l'input en nombre
    let givenNumber = parseInt(userInput, 10);

    // Appeler la fonction didIWin avec le nombre donné par l'utilisateur
    found = didIWin(givenNumber);
  }
}

// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();

// etape 4

// Fonction pour demander au joueur 1 de fournir un nombre à deviner compris entre 0 et 50
function getNumberFromPlayer1() {
  let numberToGuess;
  do {
    let userInput = prompt(
      "Joueur 1, entrez un nombre à deviner entre 0 et 50 :"
    );
    numberToGuess = parseInt(userInput, 10);
  } while (isNaN(numberToGuess) || numberToGuess < 0 || numberToGuess > 50);
  return numberToGuess;
}

// Fonction didIWin qui prend en paramètre givenNumber et numberToGuess
function didIWin(givenNumber, numberToGuess) {
  if (givenNumber < numberToGuess) {
    alert("Plus grand");
    return false;
  } else if (givenNumber > numberToGuess) {
    alert("Plus petit");
    return false;
  } else {
    alert("Bravo ! Vous avez deviné le nombre");
    return true;
  }
}

// Fonction gamePlay pour gérer la partie
function gamePlay() {
  // Joueur 1 fournit le nombre à deviner
  const numberToGuess = getNumberFromPlayer1();
  let found = false;

  // Joueur 2 essaie de deviner le nombre
  while (!found) {
    let userInput = prompt("Joueur 2, devinez le nombre :");
    let givenNumber = parseInt(userInput, 10);

    // Appeler la fonction didIWin avec le nombre donné par le joueur 2 et le nombre à deviner
    found = didIWin(givenNumber, numberToGuess);
  }
}

// Appeler la fonction gamePlay pour démarrer le jeu
gamePlay();
