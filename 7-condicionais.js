console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 21;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1); // removendo item
}




console.log(listaDeDestinos);