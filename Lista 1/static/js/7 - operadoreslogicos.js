//Operadores lógicos: https://javascript.info/logical-operators#tasks

// What's the result of OR?
//Resposta: 2

// What's the result of OR'ed alerts?
//Resposta: A chamada para alertnão retorna um valor. Ou, em outras palavras, retorna undefined.
//Restorna 1 e então 2

// What is the result of AND?
//Resposta: null

// What is the result of AND'ed alerts?
//Resposta: 1 e então undefined

// The result of OR AND OR
//Resposta: alert (null || 3 || 4)
//alert (3)

// Check the range between
//Resposta:
//let age
//if (14>= age && age <= 90){
//    alert("A idade está entre 14 e 90 anos")
//}

// Check the range outside
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
// What will the results of the expressions be inside if(...)?
// if (-1 || 0) alert( 'first' );
//Resposta: sim
// if (-1 && 0) alert( 'second' );
//Resposta: não
// if (null || -1 && 1) alert( 'third' );
//Resposta: (null !! 1) sim


// Check the login
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