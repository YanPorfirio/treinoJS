let horario = document.getElementById('horario')
let foto = document.getElementById('foto')

let data = new Date()
let hora = data.getHours()

/*let hora = 10*/  

if (hora >= 0 && hora < 12) {
    foto.src = './image/pexels-jerson-martins-1514473344-28454032.jpg'
    document.body.style.backgroundColor = '#00aeffff'
    horario.innerText = `Agora são ${hora}h da manhã`

} else if (hora >= 12 && hora < 18) {
    foto.src = './image/pexels-hilmiisilak-28399061.jpg'
    document.body.style.backgroundColor = '#be7010'
    horario.innerText = `Agora são ${hora}h da tarde`

} else {
    foto.src = './image/pexels-deyby-andrey-345262546-14578278.jpg'
    document.body.style.backgroundColor = '#2507a8ff'
    horario.innerText = `Agora são ${hora}h da noite`

}