const endpoint = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json&quantidade=10"
let res = fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    const dadoAtual = dados.slice(-1)[0].valor
    console.log(dadoAtual)

    })
