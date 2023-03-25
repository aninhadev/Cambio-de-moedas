let moedaone = document.querySelector('#moedas');
let moedatwo = document.querySelector('#moedaDesejada');
let valor = document.querySelector('#valorMoeda')
let res = document.querySelector('#res')
let enviar = document.querySelector('#enviar')
let limpar = document.querySelector('#limpar')


enviar.addEventListener('click', () => {
  var primeiraMoeda = moedaone.value
  var moedaDesejada = moedatwo.value
  var valorEntrada = valor.value
  if(primeiraMoeda === 'Real1' && moedaDesejada == 'Dolar2'){
        let dolar1 = 5
        let resutado1 = valorEntrada / dolar1
        res.innerHTML = `${resutado1}`
  } else if (primeiraMoeda === 'Dolar1' && moedaDesejada == 'Real2') {
        let real1 = 5
        let resutado4 = (valorEntrada * real1)
        res.innerHTML = `${resutado4}`
  }  else {
    console.log('ta dando errado')
  }
})
