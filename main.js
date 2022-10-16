function verificar(){
    var idade = document.getElementById('idade');
    var vidade = Number(idade.value);
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>Você tem ${vidade} anos de idade, portanto:`;
    if (vidade < 16){
        res.innerHTML += '<strong>Você ainda não pode votar</strong>';
    } else if (vidade < 18 || vidade > 65){
        res.innerHTML += '<strong>Seu voto é opcional</strong>';
    } else{
        res.innerHTML += '<strong>Seu voto é Obrigatório</strong>';
    }
}