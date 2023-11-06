//Funções: https://javascript.info/function-basics#tasks

// Is "else" required?
//Resposta: não


// Rewrite the function using '?' or '||'
//Resposta:
// function checkAge (age){
//    return (age > 18) ? true: confirm("Did parents allow you?");
//}
// // Using OR ||
// function checkAge(age){
//     return (age > 18 ) || confirm("Did parents allow you?");
// }


// Function min(a, b)
//Resposta
// /**
//  * A função compara dois números.
//  * @param {*} n1 - primeiro número
//  * @param {*} n2 - segundo número
//  * @returns - retorna o menor número entre os dois 
//  */
// function min(n1, n2){
//      return (n1 < n2) ? n1 : n2;
//  }


// Function pow(x,n)
//Resposta:
// /**
//  * A função calcula a valor de um número elevado a outro número
//  * @param {*} x - número a ser elevado 
//  * @param {*} n - potência a ser elevada
//  * @returns - calcula a valor de um número elevado a outro número
//  */
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
