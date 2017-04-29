var expect = require('chai').expect;
require('./../dist/dig').init();

describe('dig.js - obtrusive', function () {
  it('should return the value for an existing key', function () {
    var value = 'something';
    var here = {
      is: {
        a: {
          nested: value
        }
      }
    };

    expect(here.dig('is', 'a', 'nested')).to.equal(value);
  });

  it('should return null for a non-existant key', function () {
    var here = {};

    expect(here.dig('is', 'a', 'fake', 'key')).to.equal(null);
  });
})
