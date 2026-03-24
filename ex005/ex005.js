let txt = document.getElementById('txt')
let botaoMedir = document.getElementById('btnMedir')
let res = document.getElementById('res')

botaoMedir.addEventListener('click', medir)

function medir () {
    let n = Number(txt.value)

    if (txt.value.trim() === '') {
        res.innerHTML = 'Digite uma altura.'
    } else if (n < 170) {
        res.innerHTML = 'Você é <strong>baixo</strong>'
    } else if (n <= 180) {
        res.innerHTML = 'Você é de <strong>altura média</strong>'
    } else {
        res.innerHTML = 'Você é <strong>alto</strong>'
    }
}