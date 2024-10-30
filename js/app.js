const button = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


function generateHex(){
    let hexColor = "#";

    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

// Math.random() – это встроенная функция, которая возвращает случайное число в диапазоне от 0 до 1, но не включая 1.

// Math.random() * colors.length – здесь случайное число от 0 до 1 умножается на длину массива colors. 
// В итоге вернется число от 0 до количества элементов в массиве

// Math.floor(...) – функция Math.floor округляет число вниз до ближайшего целого

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}


button.addEventListener("click", () =>{
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

