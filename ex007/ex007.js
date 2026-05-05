let data = new Date()
let ano = data.getFullYear()
let fano = document.getElementById('txtano')
let res = document.getElementById('res')

let btn = document.querySelector('input.btn')
btn.addEventListener('click', verificar)    

let verificar = () => {
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro: Preencha os dados corretamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            res.innerText = `Detectamos um ${genero} com ${idade} anos.`
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'image/pexels-rods-aguiar-2154709933-33677843.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else if (idade < 24) {
                img.setAttribute('src', 'image/pexels-mani-glmz-436494018-15893898.jpg')
                 img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else if (idade < 50) {
                img.setAttribute('src', 'image/pexels-leonardodourado-14059688.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else {
                img.setAttribute('src', 'image/pexels-noelace-17481299.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            res.innerText = `Detectamos uma ${genero} com ${idade} anos.`
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'image/pexels-julianemonarifotografia-31187779.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else if (idade < 24) {
                img.setAttribute('src', 'image/pexels-brandon-retratos-768594541-34046586.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else if (idade < 50) {
                img.setAttribute('src', 'image/pexels-michel-acosta-3084958-12821014.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            } else {
                img.setAttribute('src', 'image/pexels-kari-alfonso-2151442665-35351519.jpg')
                img.style.width = '350px'
                img.style.height = '350px'
                img.style.borderRadius = '50%'
                img.style.objectFit = 'cover'
                img.style.margin = '0 auto'
                img.style.display = 'block'
                img.style.marginTop = '40px'
                img.style.marginBottom = '20px'
                res.appendChild(img)
            }
        }
    }
}