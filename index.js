const content = document.querySelector("#content");
let items;
let gridSize = 16;
let colorToggle = true

function logThis (e) {
    console.log(this.id);
}
function colorChange (e){
    currrentColor= "rgb("+(Math.floor(Math.random()*255))+","+
    (Math.floor(Math.random()*255))+","+
    (Math.floor(Math.random()*255))+")";
    if(!colorToggle){
    document.querySelector("#"+this.id).style.backgroundColor = currrentColor
    } else {
        document.querySelector("#"+this.id).style.backgroundColor = "#202020"
    }
}


function grid (num){
    content.innerHTML="";
    let rows;
    let itemID;
    for (i=0 ; i < num; i++){
    itemID = "row"+i;
    rows = document.createElement("div");
    rows.classList.add("container");
    rows.setAttribute("id",itemID);
    console.log(rows);
    content.appendChild(rows); 
    for (x=0 ; x < num; x++){
        const columns = document.createElement("div");
        columns.classList.add("item");
        columns.setAttribute("id",itemID+"col"+x);
        columns.style.backgroundColor= "LightGrey";
        rows.appendChild(columns);
        }   
    }
    console.log(document.querySelectorAll(".item"));
    const divs = document.querySelectorAll(".item");
    divs.forEach(div => {
    div.addEventListener("mouseover", colorChange);
    div.addEventListener("click", colorChange)
    });
    
}

document.querySelector(".btn").addEventListener("click", function(){
    gridSize = prompt("Please select grid size between 1 and 100.");
    if (gridSize >100){
        grid(100)
    } else if (gridSize<1){
        grid(1)
    } else {
        grid(gridSize)
    }
})
document.querySelector(".btn2").addEventListener("click", function(){
    content.innerHTML="";
    grid(gridSize)
}
)
document.querySelector(".btn3").addEventListener("click", function(){
    this.classList.toggle("rainbow");
    colorToggle = !colorToggle;
}
)





grid(16);