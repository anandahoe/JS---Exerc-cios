//Funções: https://javascript.info/function-basics#tasks

// Is "else" required?
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Did parents allow you?');
//   }
// }
// Will the function work differently if else is removed?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Did parents allow you?');
// }
// Is there any difference in the behavior of these two variants?
//Resposta: não


// Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
//Resposta:
// function checkAge (age){
//    return (age > 18) ? true: confirm("Did parents allow you?");
//}
// // Using OR ||
// function checkAge(age){
//     return (age > 18 ) || confirm("Did parents allow you?");
// }


// Function min(a, b)
// Write a function min(a,b) which returns the least of two numbers a and b.
// For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
//Resposta
/**
 * A função compara dois números.
 * @param {*} n1 - primeiro número
 * @param {*} n2 - segundo número
 * @returns - retorna o menor número entre os dois 
 */
// function min(n1, n2){
//      return (n1 < n2) ? n1 : n2;
//  }


// Function pow(x,n)
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).
// P.S. In this task the function should support only natural values of n: integers up from 1.
//Resposta:
/**
 * A função calcula a valor de um número elevado a outro número
 * @param {*} x - número a ser elevado 
 * @param {*} n - potência a ser elevada
 * @returns - calcula a valor de um número elevado a outro número
 */
// function pow(x, n){
//     let result = x;
//     for (let i = 1; i < n; i++){
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("Digite o valor do número a ser elevado:", "");
// let n = prompt("Digite a potência a ser elevada:", "");

// if (n < 1){
//     alert("Não é possível elevar a potências negativas";)
// } else{
//     alert(pow(x,n));
// }
