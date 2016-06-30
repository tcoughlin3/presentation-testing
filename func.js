

var makeArray = function(start, end) {
  var arr = [];
  start = start || 0;
  end = end || 10;

  for (var i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

// makeArray should be a function
// makeArray should return an array where zero idx is the start argument
// should return an array
// array should have all number from start to end
// if end is undefined, function should throw error
// if start is undefined, it should use 0
// if start/end receive non numbers throw error or return empty array
