let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "Febaruary",
  "MArch",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date2 = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

const day2 = weekdays[today.getDay()];
const month2 = months[today.getMonth()];
date.innerHTML = date2;
day.innerHTML = day2;
month.innerHTML = month2;
year.innerHTML = today.getFullYear();
