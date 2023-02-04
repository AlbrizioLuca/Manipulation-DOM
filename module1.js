const links = [
    'https://www.justwatch.com/fr/film/le-parrain',
    'https://www.justwatch.com/fr/film/le-parrain-2eme-partie',
    'https://www.justwatch.com/fr/film/le-parrain-3eme-partie']

function createTable(ligne, colonne){
    let target = document.getElementById('container');
    let tab = document.createElement('table');
    for(let i = 1; i < ligne+1; i++){ 
        let row = document.createElement('tr');
        tab.appendChild(row);
        for(let y = 1; y < colonne+1; y++){
            let column = document.createElement('td');
            row.appendChild(column);
            column.innerHTML = `<a href="${links[(y-1)]}" target="_blank" id="link${y}"> Partie ${y}</a>`;
        }
    }
    target.appendChild(tab);
}
createTable(1, 3);

function handlePicture(image, link) {
    link.addEventListener("mouseover", function () {
        image.style.display = 'block'; 
    });
    link.addEventListener("mouseout", function () {
        image.style.display = 'none';
    });
}

let image1 = document.getElementById('picture1');
let image2 = document.getElementById('picture2');
let image3 = document.getElementById('picture3');

const images = [
    {image: image1, link: link1},
    {image: image2, link: link2},
    {image: image3, link: link3}
];

for (i = 0; i < images.length; i++) {
    handlePicture(images[i]['image'], images[i]['link']);
}