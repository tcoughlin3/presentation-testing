// makeArray should be a function
// makeArray should return an array where zero idx is the start argument
// should return an array
// array should have all number from start to end
// if end is undefined, function should throw error
// if start is undefined, it should use 0
// if start/end receive non numbers throw error or return empty array

var expect = chai.expect;

describe('makeArray', function() {

  it('have a length property', function() {
    var arr = makeArray(1, 3);
    expect(arr).to.have.lengthOf(3);
  });

  it('should set start to zero if start is not passed in', function() {
    var arr = makeArray();
    expect(arr[0]).to.equal(0);
  });

});
