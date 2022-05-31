let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"



function conversor() {

    let input = document.getElementById("valor")
    let valor = input.value

    fetch(url).then((res)=>{

        return res.json()
    
    }).then((data)=>{
    
        let rate = data.USDBRL.high
        let resultado = `R$ ${(rate * valor).toFixed(2)}`


        document.getElementById("res").innerHTML = resultado

        res.classList.toggle("aparecer")
 

        
    
    })
}



function valor_dolar() {

    let h4 = document.getElementById("valor_dolar_h4")

    fetch(url).then((res)=>{

        return res.json()
    
    }).then((data)=>{

        let rate = data.USDBRL.high
        let valor_dolar_h4 = `DÓLAR:  ${(rate * 1).toFixed(2)}`
        h4.innerHTML = valor_dolar_h4

    })
}




btn.addEventListener("click" , () => {
    card.classList.toggle("transition")

})
btn.addEventListener("click" , () => {

    btnVoltar.classList.toggle("mostrar")
})
btnVoltar.addEventListener("click", ()=>{
    card.classList.toggle("transition")
})