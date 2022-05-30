let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"



function conversor() {

    let input = document.getElementById("valor")
    let valor = input.value

    fetch(url).then((res)=>{

        return res.json()
    
    }).then((data)=>{
    
        let rate = data.USDBRL.high

        let resultado = `R$ ${Math.round(rate * valor)}`
        document.getElementById("res").innerHTML = resultado
    
    })
}