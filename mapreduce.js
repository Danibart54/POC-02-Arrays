/* EXEMPLO 1 - "map()" */
const americo = [2, 6, 15, 30, 50, 77];
/*passar uma função para o mapa*/
const europe = americo.map(x => x * 3);

console.log(europe);
/*resultado esperado do array : [6, 18, 45, 90, 150, 231] */



/* EXEMPLO 2 - "map() "*/
const campinas = [4, 7, 11, 20];
const rio = campinas.map(num => Math.pow(num,3));

console.log(rio); 
/*resultado esperado do array elevado ao  cubo :[64, 343, 1331, 8000]*/




/* EXEMPLO 1 - "reduce()" */
const estados = [4, 2, 10, 7, 3];

const initialValue = 0;
const brasil = estados.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);

console.log(brasil);
/*Resultado esperado: 26*/



/* EXEMPLO 2 - "reduce()" */
const copasmundiais = [
    { country: "Brasil", copas: 5 },
    { country: "Alemanha", copas: 4 },
    { country: "Itália", copas: 4 },
    { country: "Argentina", copas: 2 },
    { country: "Uruguai", copas: 2 },
    { country: "França", copas: 2 },
    { country: "Espanha", copas: 1 },
    { country: "Inglaterra", copas: 1 }
]

const Totaiscampeonatos = copasmundiais.reduce( ( prevVal, elem ) => prevVal + elem.copas, 0 )
console.log(Totaiscampeonatos)