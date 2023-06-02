let input = document.querySelector("form input")
let container = document.querySelector(".container")
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let usertodo = input.value
    if (!usertodo) return;

    let newlist = document.createElement("div")
    newlist.className += " list"
    container.appendChild(newlist)

    let heading = document.createElement("h2")
    heading.className += " heading"
    heading.innerText = input.value
    newlist.appendChild(heading)

    let row = document.createElement("div")
    row.className += " row"
    newlist.appendChild(row)

    let comment = document.createElement("button")
    comment.className += "btn btn-primary btn-sm button"
    comment.innerHTML = "<i class='bi bi-chat-left-text-fill'></i>"
    row.appendChild(comment)

    let edit = document.createElement("button")
    edit.className += "btn btn-success btn-sm button"
    edit.innerHTML = "<i class='bi bi-pencil-fill'></i>"
    row.appendChild(edit)

    let del = document.createElement("button")
    del.className += "btn btn-danger btn-sm button"
    del.innerHTML = "<i class='bi bi-trash-fill'></i>"
    row.appendChild(del)

    let inputrow = document.createElement("div")
    inputrow.className += " input-row"
    newlist.appendChild(inputrow)

    let userinput = document.createElement("input")
    userinput.className += " input"
    userinput.setAttribute("type", "text")
    inputrow.appendChild(userinput)

    let inputbutton = document.createElement("button")
    inputbutton.className += " btn btn-outline-dark ticket-button"
    inputbutton.style.width = "5em"
    inputbutton.innerText = "Add +"
    inputbutton.setAttribute("type", "submit")
    inputrow.appendChild(inputbutton)

    let listdiv = document.createElement("div")
    listdiv.className += " div-list"
    newlist.appendChild(listdiv)
    input.value = ""

    let ticketbutton = document.querySelectorAll(".ticket-button")
    ticketbutton.addEventListener("click", makeTickets)

})

function makeTickets(event) {
    event.preventDefault()

    let userinput = event.target
    let submittext = userinput.previousElementSibling.value
    let ticketlist = userinput.parentNode.parentNode.querySelector(".div-list")

    let newticket = document.createElement("div")
    newticket.className += " ticket"
    newticket.innerText = submittext
    ticketlist.appendChild(newticket)
}