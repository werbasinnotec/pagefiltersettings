'use strict';

var localStorage = require('localStorage');

var getItem = function (username, url) {
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
      return pagefiltersettings[i].phrase;
    }
  }

  return undefined;
};

module.exports = getItem;
