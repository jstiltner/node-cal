'use strict';

const Year = require('./year');
const { getDay } = require('../zellars');

const isValidMonth = function(month) {
  if (typeof month !== 'number') {
    return false;
  }
  else if (month%1 !== 0) {
    return false;
  }
  else if (month < 1 || month > 12) {
    return false;
  }
  else {
    return true;
  }
};



// function to center the month & year on the first line
const centeredHeader = function(nameOfMonth, year) {
  //calculate leading spaces
  let leadingSpaces = Math.floor((15-nameOfMonth.length)/2);

  let header = "";
  // generate leading spaces
  for (let i = 1; i <= leadingSpaces; i++) {
    header += " ";
  }
  header = `${header}${nameOfMonth} ${year}`;
  return header;
};




// require isLeapYear() to determine days in February
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
let monthNames = ['January','February','March','April',
                  'May','June','July','August','September',
                  'October','November','December'];



// generateMonth()
const generateMonth = function(year, month) {
  let output = [];
  month = month;
  if (!Year.isValidYear(year) || !isValidMonth(month)) {
    console.log('not valid input');
    return false;
  }


  // set February to 29 days if leap year
  if(Year.isLeapYear(year)) {
    monthDays[1] = 29;
  }

  // get the num of days for desired month(1-12) and name of month
  // adjust month for 0-based array indexes
  const daysInMonth = monthDays[month-1];
  const nameOfMonth = monthNames[month-1];

  // create calendar header
  output.push(centeredHeader(nameOfMonth, year));

  // add line for weekdays
  output.push(`Su Mo Tu We Th Fr Sa`);

  // determine day for first day of month
  const firstDay = getDay(2016, 1, 1);

  // output calender to console
  output.forEach((item) => console.log(item));
};


module.exports = {
  "generateMonth": generateMonth,
  "isValidMonth": isValidMonth
};
