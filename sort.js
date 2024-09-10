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