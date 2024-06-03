let inputText = document.getElementById("inputText");
let inputSubmit = document.getElementById("inputSubmit");
let nombre = Math.floor(Math.random() * 100) + 1;
let attempts = 0; // Variable pour compter les tentatives
let container = document.getElementById("container")
let resetButton = null;


inputSubmit.addEventListener('click', trouvezNombre);

function trouvezNombre() {
    let userGuess = parseInt(inputText.value);
    attempts++; // Incrémenter le compteur de tentatives

    if (isNaN(userGuess) || inputText.value === "") {
        alert("Veuillez entrer un nombre valide.");
    } else {
        if (userGuess === nombre) {
            alert(`Félicitations ! Vous avez trouvé le nombre mystère en ${attempts} tentatives.`);
            resetGame();
        } else if (userGuess > nombre) {
            alert(`trop grand. Nombre d'essais: ${attempts}`);
        } else {
            alert(`trop petit. Nombre d'essais: ${attempts}`);
        }

        inputText.value = "";
        inputText.focus();
    }
}

function resetGame() {
    if (resetButton === null) {
        resetButton = document.createElement('button');
        resetButton.textContent = "Recommencer";
        container.appendChild(resetButton);
        resetButton.addEventListener('click', function() {
            nombre = Math.floor(Math.random() * 100) + 1;
            attempts = 0; // Réinitialiser le compteur de tentatives
            inputText.value = "";
            inputText.focus();
            resetButton.remove();
            resetButton = null;
        });
    }
}