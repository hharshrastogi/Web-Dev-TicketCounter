
let countEl = document.getElementById("count-el")
let count = 0
function inc(){
    count+=1
    console.log("The button was Clicked")
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")


function save(){
    let preventries= count +" - "
    saveEl.textContent +=preventries
    
    countEl.innerText = count = 0
    console.log(count);
}


