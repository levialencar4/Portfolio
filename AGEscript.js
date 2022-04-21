function veri() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('ERROR')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = ano - Number(fano.value)
       // res.innerHTML = `age calculada é : ${age}`
       var gender = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gender = 'Man'
           if (age >= 0 && age < 10){
               //crianca
               img.setAttribute('src','fotomenino.png')
           } else if (age < 21){
               //jovem
               img.setAttribute('src','fotojovemboy.png')
           } else if ( age < 50){
               //adulto
               img.setAttribute('src','fotohomem.png')
           } else {
               //idoso
               img.setAttribute('src','fotovelho.png')
           }
           
       } else if (fsex[1].checked) {
           gender = 'Woman'
           if (age >= 0 && age < 10){
            //crianca
            img.setAttribute('src','fotomenina.png')
        }else if (age < 21){
            //jovem
            img.setAttribute('src','fotojovemgirl.png')
        }else if ( age < 50){
            //adulto
            img.setAttribute('src','fotomulher.png')
        }else {
            //idoso
            img.setAttribute('src','fotoidosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `We detect ${gender}  ${age} years old.`
       res.appendChild(img)
    }

}