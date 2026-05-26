//var M = 120
//const x = 90
//let vm = v
 //if( M <= x){
    //console.log(` ok, sua velocidade foi ${M}`)
 //} else if (M>= x){
   // console.log(` voce foi multado, sua velocidade foi ${m}`)
 //}

function verificar(){
    let velocidade = document.getElementById(`velocidade`). value )
    let resultado = document.getElementById(`resultado`)
if(velocidade> 80 velocidade){
    resultado.innerHTML = `<p/> voce ultrapasou o limite de velocidade.  <span id="multa"> vai receber uma multa por ser apresadinho.<span/>` 
} else{
    resultado.innerHTML+= `<p/> voce esta dentro do limite de vlocidade. boa viagem! <p/> `
    resultado.innerHTML = `<p> sua velocidade atual e <strong> ${velocidade} km/h<strong><p/>`
    resultado.innerHTML += `<p> use sempre cinto de segurança.</p>`
    document.getElementById('multa').style. color = 'red' 
}
