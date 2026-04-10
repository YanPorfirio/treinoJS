let txt = document.getElementById('txt')
let botaoMedir = document.getElementById('btnMedir')
let res = document.getElementById('res')

botaoMedir.addEventListener('click', medir)

function medir () {
    let n = parseFloat(txt.value)

    if (txt.value.trim() === '') {
        res.innerHTML = 'Digite uma altura.'
    } else if (n < 1.70) {
        res.innerHTML = 'Você é <strong>baixo</strong>'
    } else if (n <= 1.80) {
        res.innerHTML = 'Você é de <strong>altura média</strong>'
    } else {
        res.innerHTML = 'Você é <strong>alto</strong>'
    }
}