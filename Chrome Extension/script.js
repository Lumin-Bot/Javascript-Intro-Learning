let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputField = document.getElementById("input")
const ul = document.getElementById("unordered")


inputBtn.addEventListener("click", clicked);


function clicked(){
    myLeads.push(inputField.value)
    inputField.value = ""
    renderLeads()
}

function renderLeads(){
    let listItems = ""

    for(let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
            <a target= "_blank" href="${myLeads[i]}"> 
                ${myLeads[i]} 
            </a>
        </li>`
}   
    ul.innerHTML = listItems
}




