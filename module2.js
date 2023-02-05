// Définit la variable qui stockera les entrées
let data_name;
// Vérifie s'il existe qqch dans le local storage
    if (localStorage.getItem("identity")) {
        // si oui on intègre les différentes valeur de identity à la variable 
        data_name = JSON.parse(localStorage.getItem("identity"));
    }
    else {
        // sinon le tableau est vide car premiere connection
        data_name = [];
    }

// Fonction pour reset les inputs afin qu'ils soient vides au chargement et apres validation 
function reset_inputs() {
    document.getElementById("firstname").value = '';       
    document.getElementById("lastname").value = '';
}
// Définit la fonction qui crée le tableau 
function table_result(){
    // Définit l'élément cible où sera accroché le tableau via son id`
    let table_element = document.getElementById("table_identity");

    // Définit la variable qui contient tous les éléments servant à la création du tableau
    let table =
        `<table>
            <thead> Identité(s)
            <th> Prénom </th>
            <th> Nom </th>
            </thead>
            <tbody>`;
    // Boucle sur les éléments du tableau
    for (let i = 0 ; i < data_name.length ; i++){
        // Récupère les valeurs des inputs prénom et nom de famille
        let prenom = data_name[i].firstname;
        let nom_de_famille = data_name[i].lastname;
        // Insère et ajoute les valeurs dans la table
        table += `<tr><td>${prenom}</td><td>${nom_de_famille}</td>`;
    }
    // Ajoute à la variable table la balise fermante </tbody>
    table_element.innerHTML = `${table}</tbody></table>`
}
// Appel de la fonction pour qu'il soit visible au chargement de la page
table_result();


// Récupère les valeurs des inputs prenoms et nom de famille et les formatte pour retourner les valeurs sous forme de JSON
function inputs_to_JSON() {
    let prenom = document.getElementById("firstname").value;       
    let nom_de_famille = document.getElementById("lastname").value;
    return {
        "firstname": prenom ,
        "lastname": nom_de_famille };
}

    // Se déclenche lors du click sur le bouton Valider
    go.addEventListener("click", function() {
        // si le tableau est vide, sa longueur est de 0 donc
        if (data_name.length === 0) {
            // On ajoute une nouvelle entrée au tableau data_name sous forme de JSON
            new_entry = inputs_to_JSON();
            data_name.push(new_entry);
            // Crée la clé "identity" et stocke la premiere valeur dans le localStorage
            localStorage.setItem("identity", JSON.stringify(data_name));
        }
        else {
            // Définit un compteur 
            let counted = 0; 
            // Boucle sur le tableau
            for (i = 0; i < data_name.length; i++) {
                // Pour chaque élément du tableau, si le lastname ou le firstname est différent à celui de la nouvelle entrée on incrémente le compteur
                if (
                    data_name[i]['lastname'] != document.getElementById("lastname").value                        
                    ||                        
                    data_name[i]['firstname'] != document.getElementById("firstname").value
                ) {
                    counted++;
                }
            }                

            // Si le compteur est égal à la longueur du tableau alors cela signifie que l'entrée est unique vu qu'on vient de le comparer à tous les éléments du tableau, donc on peut l'ajouter à la clé "identity"
            if (counted === data_name.length) {
                new_entry = inputs_to_JSON();
                data_name.push(new_entry);
                localStorage.setItem("identity", JSON.stringify(data_name));
            }   
        }
        reset_inputs();     
        table_result();
    })