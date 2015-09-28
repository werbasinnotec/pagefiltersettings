'use strict';

var localStorage = require('localStorage');

var setItem = function (username, url, phrase) {
  var pagefiltersettings = JSON.parse(localStorage.getItem('pagefiltersettings'));
  var i = 0;

  if (!username || !url || !phrase) {
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

  pagefiltersettings.push({ username: username, URL: url, phrase: phrase });

  localStorage.setItem('pagefiltersettings', JSON.stringify(pagefiltersettings));

  return true;
};

module.exports = setItem;
