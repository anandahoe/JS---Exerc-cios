// Métodos de objetos: https://javascript.info/keys-values-entries#tasks

// Sum the properties
// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.
// For instance:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// // alert( sumSalaries(salaries) ); // 650
// // Open a sandbox with tests.
// Resposta:
// /**
//  * A função soma o valor de todos os salários
//  * @param {*} salaries salário de cada um
//  * @returns a soma dos salários
//  */
// function sumSalaries(salaries){
//     let sum = 0;
//     for (let salary of Object.values(salaries)){
//         sum += salary;
//     }
//     return sum;
// }
// alert(sumSalaries(salaries));


// Count properties
// Write a function count(obj) that returns the number of properties in the object:
// // Try to make the code as short as possible.
// // P.S. Ignore symbolic properties, count only “regular” ones.
// // Open a sandbox with tests.
//Resposta:
// let user = {
//   name: 'John',
//   age: 30
// };
// function count (object){
//     return Object.keys(object).length;
// }
// alert(count(user)); // 2