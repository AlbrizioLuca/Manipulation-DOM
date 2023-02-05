// Récupérer tous les éléments de la checkbox via leur class commune, et les mettre dans un tableau
let additionals = document.getElementsByClassName("add");
// Crée un tableau vide dans lequel on ajoutera tous les éléments checked
let choices_defined = [];
// Boucle sur tous les éléments de la checkbox
for (let i = 0; i < additionals.length; i++) {
    // Définit chaque index du tableau comme un élément
    additionals[i].addEventListener("click", function() {
        this.setAttribute("checked", "checked");
        choices_defined.push(this.value);
        console.log("supplément", choices_defined);

    });
}

// Récupére les inputs pour le choix final via leur nom commun
let last_choice = document.getElementsByName("choice");
// Définit la variable qui stockera le choix final
let final_choice =[];
// Boucle sur les inputs pour déterminer lequel est checked
for (let i = 0; i < last_choice.length; i++) {
    let element = last_choice[i];
    element.addEventListener("click", function() {
        this.setAttribute("checked", "checked");
        final_choice = element.id;
        console.log("choix",final_choice);
    });
}

// cette fonction doit créer une div et restituer les choix contenu dans choices_defined
function displayChoiceOne() {
    // variable pour récuperer l'élément cible dans le fichier html
    let target1= document.getElementById("result_one");
    // variable qui crée la balise div
    let container1= document.createElement('div');
    // intègre au fichier HTML la div avec les valeurs checked séparées par des virgules
    container1.innerHTML = choices_defined.join(", ");
    target1.appendChild(container1);
}

// cette fonction doit créer un menu select et restituer les choix contenu dans choices_defined
function displayChoiceTwo() {
    // Récupére l'élément cible dans le fichier HTML
    let target2 = document.getElementById("result_two");
    // Crée de la balise select
    let container2 = document.createElement('select');
    // Accroche de la balise select à l'élément cible
    target2.appendChild(container2);
    // Boucle sur le tableau choices_defined
    for (let i = 0; i < choices_defined.length; i++) {
        // Crée d'un élément option pour chaque valeur dans choices_defined
        let option = document.createElement('option');
        // Récupère le texte de l'index courant et l'associe à l'option crée
        option.textContent = choices_defined[i];
        // Accroche l'option au select crée plus haut
        container2.appendChild(option);
    }
}

// Restitue les fonctions au moment du click de validation
validation.addEventListener("click", function() {
// Déterminer quelle fonction exécuter en fonction du choix final
    if (final_choice === "choice1") {
        displayChoiceOne();
    }
    if (final_choice === "choice2") {
        displayChoiceTwo();
    }
})
