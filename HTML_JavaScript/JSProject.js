document.addEventListener("keypress", function(event){
    // event.preventDefault()
    if(event.keyCode == 13)
    {
        create()
    }
})

function deleter(event) {
    event.target.parentNode.remove()
}

function create()
{
    let input = document.getElementById('input_insert')
    if (input.value=="")
    {
        alert("Campo em branco!")
    } 
    else 
    {
        let tasks = document.getElementById('div_tarefas') // Pega a string do conteúdo atual
        let nodeDiv = document.createElement("div")
        nodeDiv.className = "div_tarefa"
        nodeDiv.setAttribute("onclick", "done(event)")
        let nodeLabel = document.createElement("label")
        let nodeText = document.createTextNode(input.value)
        let nodeButton = document.createElement("button")
        nodeButton.innerText = "X"
        nodeButton.setAttribute("onclick", "deleter(event)")
        
        nodeLabel.appendChild(nodeText)
        nodeDiv.appendChild(nodeLabel)
        nodeDiv.appendChild(nodeButton)
        tasks.appendChild(nodeDiv)

        input.value = ""
    }
}

function done(event)
{
    
    if (hasClass(event.target, "done"))
    {
        console.log("0")
        event.target.classList.remove('done')
    }else{
        event.target.classList.add("done")
    }
    
}

function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}