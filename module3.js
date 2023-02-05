// 3 fonctions différentes qui sont appelées lors du click sur le menu select
function change_style1(target_text) {
    document.getElementById(target_text).style.fontFamily="fantasy";   
    document.getElementById(target_text).style.textAlign="left"; 
    document.getElementById(target_text).style.fontStyle="normal";
}

function change_style2(target_text) {
    document.getElementById(target_text).style.fontFamily="cursive";
    document.getElementById(target_text).style.textAlign="center";
    document.getElementById(target_text).style.fontStyle="italic";
}

function change_style3(target_text) {
    document.getElementById(target_text).style.fontFamily="monospace";
    document.getElementById(target_text).style.textAlign="right";
    document.getElementById(target_text).style.fontStyle="normal";
}