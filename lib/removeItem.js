'use strict';

var localStorage = require('localStorage');

var removeItem = function (username, url) {
  var pagefiltersettings = JSON.parse(localStorage.getItem('pagefiltersettings'));
  var i = 0;

  if (!username || !url) {
    return false;
  }

  if (!pagefiltersettings) {
    pagefiltersettings = [];
  }

  for (i; i < pagefiltersettings.length; i++) {
    if (pagefiltersettings[i].username === username && pagefiltersettings[i].URL === url) {
      pagefiltersettings.splice(i, 1);
    }
  }

  localStorage.setItem('pagefiltersettings', JSON.stringify(pagefiltersettings));

  return true;
};

module.exports = removeItem;
