'use strict';

var localStorage = require('localStorage');

var removeAllItems = function () {
  localStorage.removeItem('pagefiltersettings');
  return true;
};

module.exports = removeAllItems;
