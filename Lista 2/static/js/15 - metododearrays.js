// Métodos de Arrays: https://javascript.info/array-methods#tasks

// Translate border-left-width to borderLeftWidth
//Resposta:
// /**
//  * A função converte a palavra com hífen em uma palavra sem hífens com as iniciais maiusculas
//  * @param {*} str palavra com hífen (-)
//  * @returns palavra sem hífens com as iniciais maiusculas
//  */
// function camelize(str){
//     return (str
//         .split("-")
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(""))
//     } 

// alert(camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));

// Filter range
//Resposta:
// /**
//  * A função filtra os números dentro de um intervalo que estão na lista
//  * @param {*} arr lista de valores
//  * @param {*} a número inferior do intervalo
//  * @param {*} b número superior do intervalo
//  * @returns os números filtrados
//  */
// function filterRange(arr, a, b){
//     return arr.filter(item => (a <= item && item <= b));
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// alert (filtered);
// alert (arr);


// Filter range "in place"
//Resposta:
// /**
//  * A função filtra os elementos de uma matriz, mantendo somente os valores entre a e b
//  * @param {*} arr lista de valores
//  * @param {*} a limite inferir os intervalo
//  * @param {*} b limite superior do intervalo
//  */
// function filterRangeInPlace(arr, a, b){
//     for (let i = 0; i < arr.length; i++){
//         let value = arr[i];
//         if (value < a || value > b){
//             arr.splice(i, 1);
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// alert(arr);



// Sort in decreasing order
//Resposta:
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert(arr);


// Copy and sort array
//Resposta:
///**
//  * A função ordena a lista de strings
//  * @param {*} arr lista de strings
//  * @returns a lista ordenada
//  */
// function copySorted(arr){
//     return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);


// Create an extendable calculator
// //Resposta:
// /**
//  * A função é uma calculadora
//  */
// function Calculator(){
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };
//     this.calculate = function(str) {
//         let split = str.split(" "),
//         a = +split[0],
//         op = split[1],
//         b = +split[2];
//         if (!this.methods[op] || isNaN(a) || isNaN(b)){
//             return NaN;
//         }
//         return this.methods[op](a, b);
//     };
//     this.addMethod = function(name, func){
//         this.methods[name] = func;
//     };
// };

// let calc = new Calculator;
// alert(calc.calculate("3 + 7") );
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert(result);

// Map to names
//Resposta:
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 28};
// let users = [john, pete, mary];
// let names = users.map(item => item.name);
// alert(names);


// Map to objects
//Resposta:
// let john = {name: "John", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Mary", surname: "Key", id: 3};
// let users = [john, pete, mary];
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
// alert(usersMapped[0].id)
// alert(usersMapped[0].fullName)

// Sort users by age
// Resposta:
// /**
//  * A função classifica as pessoas pela idade
//  * @param {*} arr lista de pessoas
//  */
// function sortByAge(arr){
//     arr.sort((a, b) => a.age - b.age);
// }
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let arr = [ pete, john, mary ];
// sortByAge(arr);
// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);



// Shuffle an array
//Resposta:
// /**
//  * A função classifica os números aleatóriamente, porém prioriza algumas classificações
//  * @param {*} arr lista de números
//  */
// function shuffle(arr){
//     arr.sort(() => Math.random() - 0.5);
// }
//**
//  * A função classifica os números aleatóriamente
//  * @param {*} arr lista de números
//  */
// function shuffle(array){
//     for (let i = array.length - 1; i > 0; i--){
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }
// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);



// Get average age
//Resposta:
// /**
//  * A função calcula a idade média das pessoas da lista.
//  * @param {*} users lista de pessoas
//  * @returns a idade média das pessoas da lista
//  */
// function getAverageAge(users){
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }
// let john = {name: "John", age: 25};
// let pete = {name: "Pete", age: 30};
// let mary = {name: "Mary", age: 29};
// let arr = [john, pete, mary];
// alert(getAverageAge(arr));



// Filter unique array members
//Resposta:
// /**
//  * A função separa as strings únicas da lista
//  * @param {*} arr lista de strings
//  * @returns as string únicas
//  */
// function unique(arr) {
//     let result = [];
//     for (let str of arr){
//         if (!result.includes(str)){
//             result.push(str);
//         }
//     }
//     return result;
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(strings));


// Create keyed object from array
//Resposta:
// /**
//  * 
//  * @param {*} array 
//  * @returns 
//  */
// function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
// let usersById = groupById(users);

