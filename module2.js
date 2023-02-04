let data_name;
    if (localStorage.getItem("prods")) {
        data_name = JSON.parse(localStorage.getItem("prods"));
    }
    else {
        data_name = [];
    }

function resetInputs() {
    document.getElementById("firstname").value = '';       
    document.getElementById("lastname").value = '';
}

table_result();
    go.addEventListener("click", function() {
        if (data_name.length == 0) {
        new_entry = inputsToJson();
        data_name.push(new_entry);
        localStorage.setItem("prods", JSON.stringify(data_name));
        resetInputs();
        }
        else {
            let counted = 0; 
            for (i = 0; i < data_name.length; i++) {
                if (
                    data_name[i]['lastname'] == document.getElementById("lastname").value                        
                    &&                        
                    data_name[i]['firstname'] == document.getElementById("firstname").value
                ) {
                    localStorage.setItem("prods", JSON.stringify(data_name));
                    resetInputs();
                } else {
                    counted++;
                }
            }                

            if (counted === data_name.length) {
                new_entry = inputsToJson();
                resetInputs();
                data_name.push(new_entry);
                localStorage.setItem("prods", JSON.stringify(data_name));
            }       
        }     
        table_result()
    })

function inputsToJson() {
    let prenom = document.getElementById("firstname").value;       
    let nom_de_famille = document.getElementById("lastname").value;
    return pdt_json = {
        "firstname": prenom ,
        "lastname": nom_de_famille };
}

function table_result(){
    let table =
        `<table> <br>
            <thead> Identité(s)
            <th> Prénom </th>
            <th> Nom </th>
            </thead>`;

    let tbody = document.getElementById("identity");
    for (let i = 0 ; i < data_name.length ; i++){
        let prenom = data_name[i].firstname;
        let nom_de_famille = data_name[i].lastname;
        table += `<tbody><tr><td>${prenom}</td><td>${nom_de_famille}</td>`;
    }
    tbody.innerHTML = `${table}</tbody></table>`
}
