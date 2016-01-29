#!/usr/bin/env node --harmony_destructuring
'use strict';
//configure some variables
let topLine = [];
const months = {
  1: "January",
  2: "Feburary",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
};

//define function
let center = function (monthInput){
  let spaceCount = (20 - (monthInput.length)) / 2;

  const readyCount = Math.floor(spaceCount);

  for (let i=0; i<readyCount; i++){
    topLine.push(' ');
    };

  topLine.push(monthInput);


  return topLine.join('');
};

module.exports = {
  center:center}
