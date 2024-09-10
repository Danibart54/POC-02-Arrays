// Exemplo 1: Copiar um Array
const arrayOriginal = [1, 2, 3];
const copiarArray = [...arrayOriginal];//O array "arrayOriginal"( 1, 2, 3 ) é copiado para "copiarArray"
document.getElementById("copy-array").textContent = copiarArray.join(', ');//conteúdo copiado sera exibido usado o "copy-array"
 /*saída: 1, 2, 3, 4*/ 


// Exemplo 2: Combinar Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinadoArray = [...array1, ...array2];//"array"1 e "array2" serão combinados no "combinadoArray"
document.getElementById("combine-arrays").textContent = combinadoArray.join(', ');
 /*saída : 1, 2, 3, 4, 5, 6 */

// Exemplo 3: Copiar um Objeto
const objetoOriginal = { a: 1, b: 2 };// "a" e "b" para difinição.
const copiaObjeto = { ...objetoOriginal };//"objetoOriginal" é copiado para outro local "copiaObjeto " .
document.getElementById("copy-object").textContent = Object.values(copiaObjeto).join(', ');
//join(', ') para converter um array em uma string.
/* Saída :  1, 2 */

// Exemplo 4: Combinar Objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinadoObjeto = { ...obj1, ...obj2 };//obj1" e "obj2," são combinados em um novo objeto "combinadoObjeto"
document.getElementById("combine-objects").textContent = Object.values(combinadoObjeto).join(', ');
/*saída:1, 2, 3, 4 */

// Exemplo 5: Passar Elementos de um Array para Função
const numeros = [4, 5, 6];//,O array "numeros" contém três números, [4, 5, 6].
function soma(a, b, c) { 
    return a + b + c;
}
//. O operador spread expande esses valores e os passa como argumentos individuais para a função soma(a, b, c) 
const resultadoSoma = soma(...numeros);//depois são somados e trás um resultado da soma dos três elementos
document.getElementById("spread-function").textContent = resultadoSoma;
/*saída: 15  */