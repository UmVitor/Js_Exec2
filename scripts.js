function verificar() {
    var data = new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dadps e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebe_menino.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem_homem.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulto_homem.png')
            }
            else{
                //Idoso
                img.setAttribute('src','velho_homem.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','bebe_menina.png')
            }
            else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem_mulher.png')
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src','adulta_mulher.png')
            }
            else{
                //Idoso
                img.setAttribute('src','senhora_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}