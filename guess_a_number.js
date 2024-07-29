//etape 1 à 3
// function what_number() {
//   let ask = prompt("Choisis un nombre");
//   given_number = parseInt(ask);
//   return given_number;
// }
// what_number();

// function did_i_win(given_number) {
//   if (given_number < 22) {
//     alert("Plus grand");
//     return false;
//   }
//   if (given_number > 22) {
//     alert("Plus petit");
//     return false;
//   } else if (given_number === 22) {
//     alert("Bravo, tu as gagné");
//     return true;
//   }
// }

// did_i_win(given_number);

// function gameplay() {
//   let won = false;
//   while (!won) {
//     let number = what_number();
//     won = did_i_win(number);
//   }
//   alert("nice, le jeu s'arrête");
// }

// gameplay();

//  Etape 4 à 6 avec html + js
let guessNumber; // Variable pour stocker le nombre à deviner
let attempts = 0; // Variable pour compter le nombre de tentatives

// Fonction appelée lorsque joueur 1 valide son nombre
function setupGame() {
  // Récupère la valeur entrée par joueur 1 et la convertit en nombre entier
  const numberInput = document.getElementById("number-to-guess").value;
  guessNumber = parseInt(numberInput, 10);

  // Vérifie si le nombre est valide (entre 0 et 50)
  if (!isNaN(guessNumber) && guessNumber >= 0 && guessNumber <= 50) {
    // Cache le conteneur de configuration et affiche le conteneur de jeu
    document.getElementById("setup-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
  } else {
    // Affiche une alerte si le nombre n'est pas valide
    alert("Veuillez entrer un nombre valide entre 0 et 50");
  }
}

// Fonction pour vérifier si le joueur 2 a deviné le bon nombre
function did_i_win(given_number, guess) {
  attempts++; // Incrémente le compteur de tentatives

  // Compare le nombre deviné avec le nombre donné
  if (given_number < guess) {
    // Si le nombre donné est plus petit, affiche "Plus petit"
    document.getElementById("message").innerText = "Plus petit";
    return false;
  }
  if (given_number > guess) {
    // Si le nombre donné est plus grand, affiche "Plus grand"
    document.getElementById("message").innerText = "Plus grand";
    return false;
  } else if (given_number === guess) {
    // Si le nombre donné est correct, affiche "Tu as gagné"
    document.getElementById("message").innerText = "Tu as gagné";
    return true;
  }
}

// Fonction appelée lorsque joueur 2 soumet une devinette
function submitGuess() {
  // Récupère la valeur entrée par joueur 2 et la convertit en nombre entier
  const guessInput = document.getElementById("guess-input").value;
  const guess = parseInt(guessInput, 10);

  // Vérifie si le nombre est valide (entre 0 et 50)
  if (!isNaN(guess) && guess >= 0 && guess <= 50) {
    // Appelle la fonction did_i_win pour vérifier la devinette
    const found = did_i_win(guess, guessNumber);

    // Si la devinette est incorrecte, met à jour le nombre de tentatives
    if (!found) {
      document.getElementById("attempts").innerText = `Nombre de tentatives : ${attempts}`;
    } else {
      // Si la devinette est correcte, cache le champ de saisie et le bouton
      document.getElementById("guess-input").style.display = "none";
      document.querySelector("#game-container button").style.display = "none";
    }
  } else {
    // Affiche une alerte si le nombre n'est pas valide
    alert("Veuillez entrer un nombre valide entre 0 et 50");
  }
}
