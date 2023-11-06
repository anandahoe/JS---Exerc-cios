// Datas: https://javascript.info/date#tasks

// Create a date
//Resposta:
// let data = new Date(2012, 1, 20, 3, 12);
// alert(data);
// let dataString = new Date("2012-02-20T03:12");
// alert(dataString);


// Show a weekday
//Resposta:
// /**
//  * A função mostra qual o dia da semana é aquela data
//  * @param {*} date data
//  * @returns o dia da semana correspondente a data
//  */
// function getWeekDay(date){
//     let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
//     return days[date.getDay()];
// }
// let date = new Date(2012, 0, 3);
// alert(getWeekDay(date));


// European weekday
//Resposta:
// /**
//  * A função mostra qual o dia da semana no padrão europeu
//  * @param {*} date data
//  * @returns o dia da semana no padrão europeu
//  */
// function getLocalDay(date){
//     let day = date.getDay();
//     if (day === 0){
//         day = 7; 
//     }
//     return day;
// }
// let date = new Date(2012, 0, 3);
// alert(getLocalDay(date));


// Which day of month was many days ago?
//Resposta:
// /**
//  * A função calcula qual é a data após diminuir uma quantidade especifica de dias
//  * @param {*} date data 
//  * @param {*} days quantidade de dias que se quer diminuir da data
//  * @returns o dia do mês da data diminuindo o dias
//  */
// function getDateAgo(date, days){
//     let dateCopy = new Date(date);
//     dateCopy.setDate(date.getDate() - days);
//     return dateCopy.getDate();
// }
// let date = new Date(2015, 0, 2);
// alert(getDateAgo(date, 1));
// alert(getDateAgo(date, 2));
// alert(getDateAgo(date, 365));


// Last day of month?
//Resposta:
// /**
//  * A função mostra o útlimo dia daquele mês naquele ano.
//  * @param {*} year ano
//  * @param {*} month mês
//  * @returns o último dia do mês naquele ano
//  */
// function getLastDayOfMonth(year, month){
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }
// alert(getLastDayOfMonth(2012, 0));
// alert(getLastDayOfMonth(2012, 1));
// alert(getLastDayOfMonth(2013, 1));


// How many seconds have passed today?
//Resposta:
// /**
//  * 
//  * @returns quantidade de segundos que já passaram no dia de hoje
//  */
// function getSecondsToday(){
//     let now = new Date();
//     return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
// }
// alert(getSecondsToday());


// How many seconds till tomorrow?
//Resposta:
// /**
//  * 
//  * @returns a quantidade de segundos até chegar amanhã
//  */
// function getSecondsToTomorrow(){
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = hour * 3600 + minutes * 60 + seconds;
//     let totalSecondsInDay = 86400;
//     return totalSecondsInDay -  totalSecondsToday;
// }

// alert(getSecondsToTomorrow());


// Format the relative date
//Resposta:
// /**
//  * 
//  * @param {*} date data
//  * @returns a data de acordo com o descrito no exercício
//  */
// function formatDate(date){
//     let difference = new Date() - date;
//     if (difference < 1000){
//         return "Right Now";
//     }
//     let seconds = Math.floor(difference / 1000);
//     if (seconds < 60){
//         return seconds + " sec ago";
//     }
//     let minutes = Math.floor(difference / 60000);
//     if (minutes < 60){
//         return minutes + " min ago";
//     }
//     let d = date;
//     d = [
//         "0" + d.getDate(),
//         "0" + (d.getMonth() + 1),
//         "" + d.getFullYear(),
//         "0" + d.getHours(),
//         "0" + d.getMinutes()
//     ].map(component => component.slice(-2));
//     return d.slice(0, 3).join("-") + " " + d.slice(3).join(":");
// }
// alert(formatDate(new Date(new Date - 1)));
// alert(formatDate(new Date(new Date - 30 * 1000)));
// alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
// alert(formatDate(new Date(new Date - 86400 * 1000)));