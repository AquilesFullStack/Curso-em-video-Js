function tabuada(){
    var num = document.getElementById('txtn')
    var seltab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('[ERRO] Digite um número válido')
    } else {
        seltab.innerHTML =''
        let n = Number(num.value)
        for (let c = 1; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(item)
        }   
    }
}