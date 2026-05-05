const num = document.getElementById('tabuada')
const tab = document.getElementById('tab')
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
    // Pegamos o valor e convertemos para número localmente
    let n = Number(num.value)
    
    // Verificação se o campo está vazio
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        // Limpa a tabuada anterior antes de começar a nova
        tab.innerHTML = ''
        
        // Loop da tabuada
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
})