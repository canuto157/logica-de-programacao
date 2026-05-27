function mame = window.prompt(' Qual e o nome do aluno')
var numero1 = Number(window.prompt('Qual foi a primeira nota de $(name)?'))
var numero2= Number(window.prompt('Alem de ${numero1), qual foi a outra nota de ${name}'))
var situacao =''
var media = (numero1 + numero2) / 2
var resultado= document.getElementById('situacao')
resultado.innerHTML = `<P>Cauculando a media final de <mark.>${nome}</mark.</p>`
resultado.innerHTML = `<p>As notas obtidas foram <mark.${numero1} e ${numero2}<mark>.</p>`
resultado.innerHTML = `<p>A media final sera <mark>${media}<mark>.</p>`
if (media >= 7) {
    situacao = 'Aprovado'
    resultado.innerHTML +='<p>O aluno ${nome} foi <span style="color: white; background-color: green;">$(situacao)</span></p>'
}
else if (media > 5.5) {
    situacao = 'Reprovado'
    resultado.innerHTML +='<p> O aluno ${nome} foi ,span style="color: whiite;background-color: red;">${situacao}<span></p>'
}
else{
    situacao = 'Resultado'
    resultado.innerHTML += '<p>O aluno ${nome} esta de <span style="color: white; background-color:orange;">${situacao}</span></p>'
}
    