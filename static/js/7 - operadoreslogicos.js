//Operadores lógicos: https://javascript.info/logical-operators#tasks

// What's the result of OR?
// What is the code below going to output?
// alert( null || 2 || undefined );
//Resposta: 2

// What's the result of OR'ed alerts?
// What will the code below output?
// alert( alert(1) || 2 || alert(3) );
//Resposta: A chamada para alertnão retorna um valor. Ou, em outras palavras, retorna undefined.
//Restorna 1 e então 2

// What is the result of AND?
// What is this code going to show?
// alert( 1 && null && 2 );
//Resposta: null

// What is the result of AND'ed alerts?
// What will this code show?
// alert( alert(1) && alert(2) );
//Resposta: 1 e então undefined

// The result of OR AND OR
// What will the result be?
// alert( null || 2 && 3 || 4 );
//Resposta: alert (null || 3 || 4)
//alert (3)

// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
//Resposta:
//let age
//if (14>= age && age <= 90){
//    alert("A idade está entre 14 e 90 anos")
//}

// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
//Resposta:
//NOT
//let age
//if !(14>= age && age <= 90){
//    alert("A idade não está entre 14 e 90 anos")
//}
//OR
//let age
//if (90> age OR age < 14){
//    alert("A idade não está entre 14 e 90 anos")
//}

// A question about "if"
// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
// if (-1 || 0) alert( 'first' );
//Resposta: sim
// if (-1 && 0) alert( 'second' );
//Resposta: não
// if (null || -1 && 1) alert( 'third' );
//Resposta: (null !! 1) sim


// Check the login
// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema:
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
//Resposta:
// let userName = prompt("Qual é o seu login?", "");
// if (userName === "Admin"){
//     let pass = prompt("Qual a senha?", "");
//     if (pass === "TheMaster"){
//         alert ("Welcome!");
//     } else if (pass === "" || pass === null){
//         alert("Canceled");
//     } else ("Wrong password");
// } else if (userName === "" || userName === null){
//     alert ("Canceled");
// } else{
//     alert ("I don't know you");
// }