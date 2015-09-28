'use strict';

var localStorage = require('localStorage');

var getAllItems = function () {
  return localStorage.getItem('pagefiltersettings');
};

module.exports = getAllItems;
