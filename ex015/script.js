var Registro = document.getElementById('saida')
function acao1() {
    Registro.innerHTML += '<p> voce clicou no primeiro botão.</p>'
}
function acao2() {
    Registro.innerHTML += '<p> voce clicou no segundo botão.</p>'

    function acao3() {
    Registro.innerHTML += '<p> voce clicou no terceiro botão.</p>'
}
function acao4() {
    Registro.innerHTML += '<p> voce clicou no quarto botão.</p>'
}
function limpar() {
    Registro.innerHTML = ""
}