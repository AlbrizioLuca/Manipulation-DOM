// Tableau dans lequel on définit les différents liens
const links = [
    'https://www.justwatch.com/fr/film/le-parrain',
    'https://www.justwatch.com/fr/film/le-parrain-2eme-partie',
    'https://www.justwatch.com/fr/film/le-parrain-3eme-partie']

// Fonction pour créer le tableau, avec les paramètres colonnes et lignes
function createTable(ligne, colonne){
    // variable pour récuperer l'élément cible dans le fichier html
    let target = document.getElementById('container');
    // Crée un tableau avec les paramètres souhaités
    let tab = document.createElement('table');
    // Boucle pour créer les lignes
    for(let i = 1; i < ligne+1; i++){ 
        let row = document.createElement('tr');
        // Accroche les lignes au tableau
        tab.appendChild(row);
        // Boucle pour créer les colonnes
        for(let y = 1; y < colonne+1; y++){
            let column = document.createElement('td');
            // Accroche les colonnes au tableau
            row.appendChild(column);
            // intègre au fichier HTML les liens et récupère les adresses du tableau définit plus haut
            column.innerHTML = `<a href="${links[(y-1)]}" target="_blank" id="link${y}"> Partie ${y}</a>`;
        }
    }
    // Accroche le tableau au fichier HTML, sur l'élément cible
    target.appendChild(tab);
}
// Appel de la fonction et ses paramètres
createTable(1, 3);

// Fonction pour gérer le mouseover/mouseout
function handlePicture(image, link) {
    // affiche l'image
    link.addEventListener("mouseover", function () {
        image.style.display = 'block'; 
    });
    // masque l'image
    link.addEventListener("mouseout", function () {
        image.style.display = 'none';
    });
}

// Variable pour récupérer les images cachées dans le HTML via leur id
let image1 = document.getElementById('picture1');
let image2 = document.getElementById('picture2');
let image3 = document.getElementById('picture3');

// Associe les images aux liens du tableau définit plus haut
const images = [
    {image: image1, link: link1},
    {image: image2, link: link2},
    {image: image3, link: link3}
];

// Boucle pour associer image / adresses https
for (i = 0; i < images.length; i++) {
    handlePicture(images[i]['image'], images[i]['link']);
}