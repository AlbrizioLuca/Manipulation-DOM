// Définit l'élément cible
let container = document.getElementById("chest")

// Définit les éléments de la liste via leur id
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

// Intègre les éléments ci dessus dans un tableau
let position = [one, two, three, four];

// Définit un booléen pour savoir si l'ordre est croissant ou non
let isAscending = true;

// ordre décroissant
document.getElementById("descending").addEventListener("click", () => {
    if (isAscending) {
        // Méthode splice permet de supprimer un/des éléments d'un tableau et de réatribuer des positions différentes
            // 1er attribut: l'index où se placer
                // 2eme attribut: le nombre d'éléments à supprimer
                    // et ensuite les élements dans l'ordre que l'on souhaite 
        position.splice(0, 4, position[3], position[2], position[1], position[0]);
        for (let i = 0; i < position.length; i++) {
            container.appendChild(position[i]);
        }
        isAscending = false;
    }
})

// ordre croissant
document.getElementById("ascending").addEventListener("click", () => {
    if (!isAscending) {
        position.splice(0, 4, position[3], position[2], position[1], position[0]);
        for (let i = 0; i < position.length; i++) {
            container.appendChild(position[i]);
        }
        isAscending = true;
    }
})