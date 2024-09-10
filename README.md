# POC-02-Arrays
![](logo.jpg)


Explicação dos métodos de arrays (sort, filter,map,reduce,spread). 
## Sort 

Sort é um método de array que consiste em classificar o item que esta dentro do array transferir para outro array e organizar da forma que é escolhida. A forma padrão do sort() é ascendente, criada após converter o item para uma String.


``` Js
// ARRAY SORT 

// Ordena em ordem alfabetica
let nomes = ["Maria", "João", "Ana", "Pedro"];
nomes.sort();
console.log(nomes);  // Saída: ['Ana', 'João', 'Maria', 'Pedro']

//exemplo2
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 28 }
  ];
  // Ordenando o array de objetos por idade (ordem crescente)
  pessoas.sort(function(a, b) {
    return a.idade - b.idade;  // Comparando a propriedade 'idade'
  });
  
  console.log(pessoas);
  /* Saída:
  [
    { nome: "Maria", idade: 22 },
    { nome: "Ana", idade: 25 },
    { nome: "Pedro", idade: 28 },
    { nome: "João", idade: 30 }
  ]
  */

```
[Código](sort.js)

## Filter 
Filter é um método de array que cria um novo array que age de acordo com a funçao que foi criada anteriormente pede.

``` Js
// criacao do array numeros 
const nums = []

// preenchimento do array de 1 a 100
for (let i = 0; i < 100; i++) {
    nums.push(i+1)
}

// Usando o filter para encontrar os numeros pares
let pares = nums.filter(n => n % 2 === 0)
// saida
console.log(pares)

```

[Código](filter.js)

## Map 
O método map cria uma nova matriz com os resultados da chamada de função especificada aplicada a cada um de seus elementos.

### Exemplo 1
``` Js
    const americo = [2, 6, 15, 30, 50, 77];
    /passar uma função para o mapa/
    const europe = americo.map(x => x * 3);

    console.log(europe);
    //resultado esperado do array : [6, 18, 45, 90, 150, 231].
```

### Exemplo 2 

``` Js
    const campinas = [4, 7, 11, 20];
    const rio = campinas.map(num => Math.pow(num,3));

    console.log(rio); 
    //resultado esperado do array elevado ao  cubo :[64, 343, 1331, 8000]/
```
[Código](maproduce.js)

## Reduce 

O método reduce executa uma função de redução em cada elemento de uma matriz, retornando um único valor como resultado.

### Exemplo 1 

``` Js
    const estados = [4, 2, 10, 7, 3];

    const initialValue = 0;
    const brasil = estados.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);

    console.log(brasil);
    /Resultado esperado: 26/
```

### Exemplo 2 
``` Js
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
```
[Código](maproduce.js)

## Spread 

Spread é um método de array é usado para copiar tudo ou uma parte do array em outro array.

### Exemplo 1

``` Js
// Exemplo 1: Copiar um Array
    const arrayOriginal = [1, 2, 3];
    const copiarArray = [...arrayOriginal];//O array "arrayOriginal"( 1, 2, 3 ) é copiado para "copiarArray"
    document.getElementById("copy-array").textContent = copiarArray.join(', ');//conteúdo copiado sera exibido usado o "copy-array"
    //saida: 1, 2, 3, 4

```

### Exemplo 2

``` Js
// Exemplo 2: Combinar Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinadoArray = [...array1, ...array2];//"array"1 e "array2" serão combinados no "combinadoArray"
document.getElementById("combine-arrays").textContent = combinadoArray.join(', ');
 /*saída : 1, 2, 3, 4, 5, 6 */

```

### Exemplo 3

``` Js
// Exemplo 3: Copiar um Objeto
const objetoOriginal = { a: 1, b: 2 };// "a" e "b" para difinição.
const copiaObjeto = { ...objetoOriginal };//"objetoOriginal" é copiado para outro local "copiaObjeto " .
document.getElementById("copy-object").textContent = Object.values(copiaObjeto).join(', ');
//join(', ') para converter um array em uma string.
/* Saída :  1, 2 */

```

[Código](script.js)
