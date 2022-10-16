function calcular(){
    var txtv = document.getElementById('txtvel');
    var res = document.getElementById('res');
    var vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade é igual a ${vel}<p>`
    if (vel > 60){
        res.innerHTML += 'Você está <strong>multado</strong> por excesso de velocidade!'
    } else{
        res.innerHTML += '<strong>Parabéns!</strong> Você está dentro da normalidade!'
    }
}