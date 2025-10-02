


function multiTable() {
    let input = Number(window.prompt("Select a number"));
    const ul = document.getElementById("ul");
    ul.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li");
        item.innerHTML = `<strong>${input} × ${i} = ${input * i}</strong>`;
        item.classList.add("table-item");
        ul.appendChild(item);
    }
}


const btnArray = [];
const btnArrayOG = [];

for(let i = 0;i<11;i++){
    const btn = document.createElement("button");
    btn.innerHTML = "Button";
    document.getElementById("buttons").appendChild(btn);
    btnArray.push(btn);
}

btnArray.forEach(btn =>{
    btn.style.backgroundColor = getRandomColor();
}); 

btnArray.forEach(btn =>{
    let colorOG = btn.style.backgroundColor;
    btnArrayOG.push(colorOG);
}); 

console.log(`og colors ${btnArrayOG}`);

function checkColor(){
    const select = document.getElementById("buttonColor");
    const selected = select.value;
    console.log(`You picked: ${selected}`);
    return selected;
}


function getRandomColor() {
    const colors = ["#c21300", "#1b8bd6", "#07833a"];
    return colors[Math.floor(Math.random() * colors.length)];
}


function applyColor() {
    const color = checkColor();

    if (color === "red" || color === "blue" || color === "green"){
        btnArray.forEach(btn =>{
        btn.style.backgroundColor = color;
        }); 
    } 
    else if (color === "rad") {
        btnArray.forEach(btn =>{
        btn.style.backgroundColor = getRandomColor();
    }); 
    }
    else if (color === "reset") {
        for(let i =0;i<11;i++){
            btnArray[i].style.backgroundColor = btnArrayOG[i];
        }
    }
}



