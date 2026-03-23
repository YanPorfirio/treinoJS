let txt1 = document.getElementById('txt1')
let txt2 = document.getElementById('txt2')
let botaoSomar = document.getElementById('btnSomar')
let res = document.getElementById('res')

botaoSomar.addEventListener('click', somar)

function somar() {
    let n1 = Number(txt1.value)
    let n2 = Number(txt2.value)
    let total = n1 + n2

    res.innerHTML = `O resultado da soma de ${n1} e ${n2} e igual a <strong>${total}</strong>`
}
