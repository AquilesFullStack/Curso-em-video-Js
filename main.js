function check(){  
    var pais = document.getElementById('pais');
    var origem = String(pais.value);
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>Você é nascido de/o/a ${origem}, portanto</p>`;
    if (origem == "Brasil"){
        res.innerHTML += '<p>Você é Brasileiro!</p>';
    } else {
        res.innerHTML += '<p>Mete o pé gringoooo</p>'
    }
}
