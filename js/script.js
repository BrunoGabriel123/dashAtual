
function dataAtualFormatada(){
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes  = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length  == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/"+ mesF  + "/"+ anoF;
}

var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var d = new Date();

console.log(dataAtualFormatada());
document.getElementById("elemento").innerHTML += dataAtualFormatada() + " " +semana[d.getDay()];

document.getElementById("elemento").innerHTML('tabelaBacklog') = innerHeight = 300;