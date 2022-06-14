


function validarLogin(){
    let usuario = document.getElementById('usuario').value 
    let senha = document.getElementById('senha').value

    let btn = document.getElementById('entrar')

    btn.removeAttribute('href')

    if(usuario == 'bortolossipartsadmin' && senha == '170xk2001'){
        btn.setAttribute('href', './admin.html')
    }else if(usuario == 'SilvaSantosTruck' && senha == 'Silva.santos/net'){
        btn.setAttribute('href', './client.html')
    }
}