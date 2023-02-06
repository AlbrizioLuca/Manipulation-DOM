// lors du changement dans le menu select, la fonction s'active et changera le style du paragraphe ciblé par son id 
document.getElementById("target_text").onchange = function() {change_style()};

function change_style(style) {
    // Cible le paragraphe par son id
    let target = document.getElementById("target_text");
    // si deuxieme option choisie
        if (style === "style1") {
            target.style.fontFamily="fantasy";   
            target.style.textAlign="center"; 
            target.style.fontStyle="normal";
        } 
    // si troisieme option choisie
        else if (style === "style2") {
            target.style.fontFamily="cursive";   
            target.style.textAlign="left"; 
            target.style.fontStyle="italic";
        }
    // si quatrieme option choisie
        else if (style === "style3") {
            target.style.fontFamily="monospace";   
            target.style.textAlign="right"; 
            target.style.fontStyle="normal";
        }
    // sinon on reste à la premiere option soit aucun style
        else {
            target.style.fontFamily="";   
            target.style.textAlign=""; 
            target.style.fontStyle="";
        }
    };