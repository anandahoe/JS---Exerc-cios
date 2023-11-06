//Objetos: https://javascript.info/object#tasks

// Hello, object
//Resposta:
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;


// Check for emptiness
// //Resposta:
// function isEmpty(object) {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }

// Sum object properties
// //Resposta:
// let sum = 0;
// for (let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);


// Multiply numeric property values by 2
//Resposta:
// /**
//  * A função multiplica os valores do objeto por 2.
//  * @param {*} object - objeto
//  */
// function multiplyNumeric(object){
//     for (let key in object){
//         if (typeof object[key] == "number"){
//             object[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu)
// alert(menu.width);
// alert(menu.height);
// alert(menu.title);