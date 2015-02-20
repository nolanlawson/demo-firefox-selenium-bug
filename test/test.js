/*jshint expr:true */
'use strict';

var demo = require('../lib');

var chai = require('chai');
chai.use(require("chai-as-promised"));

var should = chai.should(); // var should = chai.should();
var Promise = require('bluebird'); // var Promise = require('bluebird');

tests();

function tests() {

  beforeEach(function () {
  });
  afterEach(function () {
  });
  describe('basic tests', function () {

    it('should do stuff', function () {
      should.exist(demo);
      return Promise.resolve(true);
    });
  });
}
