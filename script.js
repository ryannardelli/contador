function Click() {
    var caixa1 = window.document.querySelector ('input#i-inicio')
    var caixa2 = window.document.querySelector('input#ifim')
    var caixa3 = window.document.querySelector ('input#ipasso')
    var p1 = window.document.querySelectorAll ('p')[0]
    var inicio = Number(caixa1.value)
    var fim = Number(caixa2.value)
    var passo = Number(caixa3.value)

    p1.innerHTML = 'Contando:<br>'
    
    if (caixa1.value.length == 0 || caixa2.value.length == 0 || caixa3.value.length == 0) {
       p1.innerHTML = `Impossível Contar!`
    } else if (passo == 0) {
        window.alert ('Passo inválido! A contagem será feita considerando passo 1.')
        if (fim > inicio) {
            for (c = inicio; c <= fim; c++) {
              p1.innerHTML += `${c} &#x1F449`  
            }
            p1.innerText +=`\u{1F3C1}`
        } else if (inicio > fim) {
            for (c = inicio; c >= fim; c--) {
                p1.innerHTML += `${c} &#x1F449`  
            }
            p1.innerText +=`\u{1F3C1}`
        }
    } else if (fim > inicio && passo >= 1) {
        for (c = inicio; c <= fim; c = c + passo) {
            p1.innerHTML += `${c} &#x1F449`
        }
        p1.innerText +=`\u{1F3C1}`
    } else if (inicio > fim && passo >= 1) {
        for (c = inicio; c >= fim; c = c - passo) {
            p1.innerHTML += `${c} &#x1F449`
        }
        p1.innerText +=`\u{1F3C1}`
    }
    caixa1.value = ''
    caixa2.value = ''
    caixa3.value = ''
    caixa1.focus()
    
}