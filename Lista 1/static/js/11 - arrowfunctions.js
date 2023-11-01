//Arrow Functions: https://javascript.info/arrow-functions-basics#tasks


// Rewrite with arrow functions
// Replace Function Expressions with arrow functions in the code below:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
//Resposta:
/**
 * 
 * @param {*} question - questão de confirmação
 * @param {*} yes 
 * @param {*} no 
 * @returns 
 */
// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask ("Do you agree?",
//     () => alert("You agreed."),
//     () => alert ("You canceled the execution.")
// );