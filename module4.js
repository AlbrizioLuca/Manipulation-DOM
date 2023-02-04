let container = document.getElementById("chest")
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
    
let position = [one, two, three, four];
let isAscending = true;

document.getElementById("descending").addEventListener("click", () => {
    if (isAscending) {
        position.splice(0, 4, position[3], position[2], position[1], position[0]);
        for (let i = 0; i < position.length; i++) {
            container.appendChild(position[i]);
        }
        isAscending = false;
    }
})

document.getElementById("ascending").addEventListener("click", () => {
    if (!isAscending) {
        position.splice(0, 4, position[3], position[2], position[1], position[0]);
        for (let i = 0; i < position.length; i++) {
            container.appendChild(position[i]);
        }
        isAscending = true;
    }
})