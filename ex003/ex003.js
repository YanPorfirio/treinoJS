let a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Pronto'
}

function entrar() {
    a.innerText = 'VAZA'
}

function sair() {
    a.innerText = 'acho bom'
}
