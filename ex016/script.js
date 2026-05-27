function verificar() {
    let velocidade = Number (document.getElementById('velocidade').value)
    let resultado = document.getElementById('resultado')

    resultado.innerHTML = `<p>Sua velocidade atual e <strong> ${velocidade} km/h</strong></p>`

if(velocidade> 80){
    resultado.innerHTML += `<p/> voce ultrapasou o limite de velocidade.  <span id="multa"> vai receber uma multa por ser apresadinho.<span/>` 
} else{
    resultado.innerHTML+= `<p/> voce esta dentro do limite de vlocidade. boa viagem! <p/> `
}
    resultado.innerHTML += `<p> sua velocidade atual e <strong> ${velocidade} km/h<strong><p/>`
    resultado.innerHTML += `<p> use sempre cinto de segurança.</p>` 
}