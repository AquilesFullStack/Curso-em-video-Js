function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(txtano.value.length == 0 || Number(txtano.value) > ano ){
        window.alert(' [ERRO] Você precisa digitar um valor real')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero ='Homem'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','menino.png')
            } else if (idade >=10 && idade <20){
                //jovem
                img.setAttribute('src', 'hjovem.png')
            } else if (idade >=20 && idade <50){
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade >= 50){
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'menina.png')
            } else if (idade >=10 && idade <20){
                //jovem
                img.setAttribute('src', 'mjovem.png')
            } else if (idade >=20 && idade <50){
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else if (idade >=50){
                //idosa
                img.setAttribute('src', 'idosa.png') 
            }
        }
        
    } 
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos<p>`
        res.appendChild(img)
    }