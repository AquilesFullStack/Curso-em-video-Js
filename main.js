function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        window.alert('[ERROR] Faltam dados')
        res.innerHTML = 'Impossível contar'
    } else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1') 
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p){
                //contagem crescente
                res.innerHTML += `\u{1F449} ${c}`
            }   
        } else {
            for (c = i; c >= f; c -=p){
                //contagem descrescente
                res.innerHTML += `\u{1F449} ${c}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
