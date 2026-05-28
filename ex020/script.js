function varificar(){
    let nascimento = document.getElementById('nascimento'). value; // menor de idade nao pode doar sangue.
    let doencaSelcionada = document.queryselector('input[name="sick"]:checked').value;
    let peso = Number(document.getElementById('peso').value) //peso minimo 50kg
    let tattooSelecionada = document.querySelector('input[name="tattoo"]:checked').value;
    let medicineSelecionada = document.querySelector('input[name=medicine"]:checked').value;
    
    //console.log(`Nascimento: ${nascimento}/Doença: ${doencaSelecionada} / Peso: ${peso} / Tatuagem: ${tattooSelecionada} / Doença: ${medicineSelecionada}`)
    console.log(nascimeto)
    console.log(typeof nascimento)
    let dataNascimento = new Date(nascimento)
    console.log(dataNascimento)
    console.log(typeof daya Nascimento)
    /* Capturar Idade*/
    let dataNascimento = new Date(nascimento +"T00:00:00"); //AQUI
    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    console.log(idade)
    let dia = dataNascimento.getDate(); // AQUI
    let mes = dataNascimento.getMonth() + 1; // AQUI
}


