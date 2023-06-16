let count = 0
let counting = document.getElementById("count")
let previous = document.getElementById("previous")

function add(){
    count += 1
    counting.innerHTML = count
}

function save(){
    let container = count + " - "
    previous.textContent += container
    reset()
}

function reset(){
    count = 0
    counting.innerHTML = count
}