const d = new Date();
let year = d.getFullYear();
console.log(year);
let month = d.getMonth();
console.log(month);
let date = d;
console.log(date);
let day = d.getDay();
console.log(day);
let hour = d.getHours();
console.log(hour);
let minutes = d.getMinutes();
console.log(minutes);
let past = new Date('01-01-1970');
let present = d;
let timeElapsed = present-past;
console.log(timeElapsed);

