let webhook = "https://helioborges.app.n8n.cloud/webhook/animacao-css"
let createBtn = document.querySelector("button")

async function submitOrder() {
    let searchBar = document.querySelector("input").value
    let areaCode = document.querySelector(".box-code")
    let areaResult = document.querySelector(".box-result")

    let response = await fetch(webhook, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ pergunta: searchBar })
    })

    let result = await response.json()

    let info = JSON.parse(result.resposta)

    areaCode.innerHTML = info.code
    areaResult.innerHTML = info.preview

    document.head.insertAdjacentHTML('beforeend', "<style>"+ info.style +"</style>")
    
}


createBtn.addEventListener("click", submitOrder)