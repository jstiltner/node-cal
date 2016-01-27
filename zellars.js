#!/usr/bin/env node

'use strict';

console.log("zellar");

let modifiedMonth = function (rawMonth) {
    if (rawMonth < 3){
    rawMonth = rawMonth + 12;
    }
  return rawMonth;
};

let modifiedYear = function (rawYear, rawMonth) {
    if (rawMonth < 3){
      rawYear = rawYear - 1;
    }
  return rawYear;
};

let getDay = function (y, m, q){
  modifiedYear(y,m);

  modifiedMonth(m);

  var h = (q + Math.floor(((m + 1) * 26) / 10) + y + parseInt(y / 4) +
           6 * parseInt(y / 100) + parseInt(y / 400) - 1) % 7;
    return h;
};

module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay:getDay
}
