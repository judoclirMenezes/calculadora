function calcularJurosSimples() {
    var principal = parseFloat(document.getElementById("principal").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var periodo = parseFloat(document.getElementById("periodo").value);

    var juros = (principal * taxa * periodo) / 100;
    var valorFuturo = principal + juros;

    document.getElementById("resultado").innerHTML = "Valor Futuro (Juros Simples): R$ " + valorFuturo.toFixed(2);
}

function calcularJurosCompostos() {
    var principal = parseFloat(document.getElementById("principal").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var periodo = parseFloat(document.getElementById("periodo").value);

    var valorFuturo = principal * (1 + taxa / 100) ** periodo;

    document.getElementById("resultado").innerHTML = "Valor Futuro (Juros Compostos): R$ " + valorFuturo.toFixed(2);
}
parseFloat
//analisa um argumento (convertendo-o para uma string primeiro caso necessário) e retorna um número decimal.
toFixed
//arredonda o número para cima, por exemplo 11.123 , o valor fica 11.12.
calcularJurosCompostos
//é uma função que calucula o juros composto de acordo com o numero digita no campo de pesquisa
calcularJurosSimples
//é uma função que calucula o juros simples de acordo com o numero digita no campo de pesquisa
innerHTML
// é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento
getElementById
//permite obter um elemento do documento a partir de seu atributo ID especificado
value
//retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto.
