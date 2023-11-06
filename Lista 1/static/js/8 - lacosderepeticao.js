//Laços de repetição: https://javascript.info/while-for#tasks

// Last loop value
//Resposta: 1

// Which values does the while loop show?
//Resposta: 1 a 4 ; 1 a 5

// Which values get shown by the "for" loop?
//Resposta: 0 a 4 em ambos

// Output even numbers in the loop
//Resposta:
// for (let i = 2; i <= 10; i++){
//     if (i % 2 === 0){
//         alert(i);
//     }
// }

// Replace "for" with "while"
//Resposta:
// let i = 0;
// while (i < 3){
//     alert (`number $(i)!`);
//     i++;
// }

// Repeat until the input is correct
//Resposta:
// let number;
// do {
//     number = prompt("Digite um número maior do que 100", 0);
// } while (number <= 100 || number);

// Output prime numbers
// Resposta: 
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++){
//     for (let j = 2; j < i, j++){
//         if (i % j === 0) continue nextPrime
//     }
//     alert (`$(i) é um número primo`);
// }