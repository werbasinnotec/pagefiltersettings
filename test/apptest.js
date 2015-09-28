'use strict';

var assert = require('assertthat');
var app = require('../lib/app');

suite('Design-Check:', function () {
  test('===> getItem is a function.', function (done) {
    assert.that(app.getItem).is.ofType('function');
    done();
  });

  test('===> setItem is a function.', function (done) {
    assert.that(app.setItem).is.ofType('function');
    done();
  });

  test('===> getAllItems is a function.', function (done) {
    assert.that(app.getAllItems).is.ofType('function');
    done();
  });

  test('===> removeAllItems is a function.', function (done) {
    assert.that(app.removeAllItems).is.ofType('function');
    done();
  });

  test('===> removeItem is a function.', function (done) {
    assert.that(app.removeItem).is.ofType('function');
    done();
  });
});

suite('Functioncheck (setItem):', function () {
  test('===> return false when variable is not complete.', function (done) {
    assert.that(app.setItem('test')).is.falsy();
    done();
  });

  test('===> return true when variable is saved.', function (done) {
    assert.that(app.setItem('mrx', 'workorder/510040', 'Testphrase')).is.true();
    done();
  });
});

suite('Functioncheck (getItem):', function () {
  test('===> return false when variable is not complete.', function (done) {
    assert.that(app.getItem('test')).is.falsy();
    done();
  });

  test('===> return the saved phrase.', function (done) {
    assert.that(app.getItem('mrx', 'workorder/510040')).is.equalTo('Testphrase');
    done();
  });
});

suite('Functioncheck (getAllItems):', function () {
  test('===> return all saved phrases.', function (done) {
    assert.that(app.getAllItems()).is.equalTo(JSON.stringify([{ username: 'mrx', URL: 'workorder/510040', phrase: 'Testphrase' }]));
    done();
  });
});

suite('Functioncheck (removeItem):', function () {
  test('===> return false when variable is not complete.', function (done) {
    assert.that(app.removeItem('test')).is.falsy();
    done();
  });

  test('===> set Testphrase number one.', function (done) {
    assert.that(app.setItem('mrx', 'workorder/510039', 'Testphrase1')).is.true();
    done();
  });

  test('===> set Testphrase number two.', function (done) {
    assert.that(app.setItem('mrx', 'workorder/510040', 'Testphrase2')).is.true();
    done();
  });

  test('===> set Testphrase number two.', function (done) {
    assert.that(app.setItem('mrx', 'workorder/510041', 'Testphrase3')).is.true();
    done();
  });

  test('===> delete Testphrase number two.', function (done) {
    assert.that(app.removeItem('mrx', 'workorder/510040')).is.true();
    done();
  });
});

suite('Functioncheck (removeAllItems):', function () {
  test('===> return true when all items are deleted', function (done) {
    assert.that(app.removeAllItems('test')).is.true();
    done();
  });
});

