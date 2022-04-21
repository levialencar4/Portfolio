
function load(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')  
var data = new Date
var hora = data.getHours()

msg.innerHTML = `Now is ${hora} `

if (hora >= 0 && hora < 12) {
    img.src = "fotomanha.png"
    document.body.style.background = 'yellow'
}else if (hora >= 12 && hora < 18){
    img.src = "fototarde.png"
    document.body.style.background = 'red'
}else {
    img.src = "fotonoite.png"
    document.body.style.background = 'black'
}
}
