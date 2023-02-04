function open_module(event,module) {
    console.log(this);
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab_content");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(module).style.display = "block";
    event.currentTarget.className += " active";
}

function collapse(){
    let visible_or_not = document.getElementById("tab_nav");
    if (visible_or_not.style.display === "flex") {
        visible_or_not.style.display ="none";
    } else {visible_or_not.style.display = "flex";
    }
}