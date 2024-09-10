const nums = []
for (let i = 0; i < 100; i++) {
    nums.push(i+1)
}
let pares = nums.filter(n => n % 2 === 0)
console.log(pares)