// Datas: https://javascript.info/date#tasks

// Create a date
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using alert.


// Show a weekday
// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
// For instance:
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"
// Open a sandbox with tests.


// European weekday
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2
// Open a sandbox with tests.


// Which day of month was many days ago?
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.
// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
// Should work reliably for days=365 or more:
// let date = new Date(2015, 0, 2);
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.
// Open a sandbox with tests.


// Last day of month?
// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year – four-digits year, for instance 2012.
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
// Open a sandbox with tests.


// How many seconds have passed today?
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
// For instance, if now were 10:00 am, and there was no daylight savings shift, then:
// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.


// How many seconds till tomorrow?
// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
// For instance, if now is 23:00, then:
// getSecondsToTomorrow() == 3600
// P.S. The function should work at any day, the “today” is not hardcoded.


// Format the relative date
// Write a function formatDate(date) that should format date as follows:
// If since date passed less than 1 second, then "right now".
// Otherwise, if since date passed less than 1 minute, then "n sec. ago".
// Otherwise, if less than an hour, then "m min. ago".
// Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
// For instance:
// alert( formatDate(new Date(new Date - 1)) ); // "right now"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );
// Open a sandbox with tests.