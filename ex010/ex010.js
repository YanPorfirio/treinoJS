const inicio = document.getElementById('início')
const fim = document.getElementById('fim')
const passo = document.getElementById('passo')
const res = document.getElementById('result')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  let start = Number(inicio.value)
  let end = Number(fim.value)
  let step = Number(passo.value)
  
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar! Preencha todos os dados.'
  } else {
    res.innerHTML = 'Contando:<br>'
    if (step <= 0) {
      alert('Passo inválido! Considerando PASSO 1')
      step = 1
    }
    if (start < end) {
      // Contagem crescente
      for (let i = start; i <= end; i += step) {
        res.innerHTML += `${i} 🡒 `
      }
    } else {
      // Contagem regressiva
      for (let i = start; i >= end; i -= step) {
        res.innerHTML += `${i} 🡒 `
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
})