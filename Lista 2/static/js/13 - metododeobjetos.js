// Métodos de objetos: https://javascript.info/keys-values-entries#tasks

// Sum the properties
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
//Resposta:
// let user = {
//   name: 'John',
//   age: 30
// };
// function count (object){
//     return Object.keys(object).length;
// }
// alert(count(user)); // 2