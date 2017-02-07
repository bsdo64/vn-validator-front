const { describe, it, before } = require('mocha');
const expect = require('chai').expect;

describe('Array', function() {
  before(function() {
    // ...
  });

  describe('#indexOf()', function() {
    context('when not present', function() {
      it('should not throw an error', function() {
        expect((function() {
          [1,2,3].indexOf(4);
        })).not.to.throw();
      });
      it('should return -1', function() {
        expect([1,2,3].indexOf(4)).to.equal(-1);
      });
    });
    context('when present', function() {
      it('should return the index where the element first appears in the array', function() {
        expect([1,2,3].indexOf(3)).to.equal(2);
      });
    });
  });
});