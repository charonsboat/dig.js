var expect = require('chai').expect;
var dig = require('./../dist/dig').dig;

describe('dig.js - unobtrusive', function () {
  it('should return the value for an existing key', function () {
    var value = 'something';
    var here = {
      is: {
        a: {
          nested: value
        }
      }
    };

    expect(dig(here, 'is', 'a', 'nested')).to.equal(value);
  });

  it('should return null for a non-existant key', function () {
    var here = {};

    expect(dig(here, 'is', 'a', 'fake', 'key')).to.equal(null);
  });
})
