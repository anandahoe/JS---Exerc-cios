// Arrays: https://javascript.info/array#tasks


// Is array copied?
//Resposta: 4


// Array operations.
//Resposta:
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] ="Classics";
// styles.shift();
// alert(styles);
// styles.unshift("Rap", "Reggae");
// alert(styles)



// Calling in an array context
//Resposta: A função () está na posição 2 do arr.


// Sum input numbers
//Resposta:
// /**
//  * A funnção faz a soma dos números digitados
//  * @returns 
//  */
// function sumInput (){
//     let numbers = [];
//     while (true){
//         let value = prompt("Digite um número:", "");
//         if (value === "" || value === null || !isFinite(value))
//             break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());


// A maximal subarray
//Resposta:
// function getMaxSubSum(arr){
//     let maxSum = 0;
//     for (let i = 0; i < arr.lenght; i++) {
//         let sumFixedStart = 0;
//         for (let j = i; j < arr.lenght; j++) {
//             sumFixedStart += arr[j];
//             maxSum = Math.max(maxSum, sumFixedStart);
//         }
//     }
//     return maxSum;
// }
//alert(getMaxSubSum([-1, 2, 3, -9]));
//alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));

//Segunda resolução
// function getMaxSubSum(arr){
//     let maxSum = 0;
//     let partialSum = 0;
//     for (let item of arr){
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
// }
// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));