// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
// your code goes here
//declre vsar to save output string
//do simple cases number string undefined null empty
//move on to array and objects. 

  var output = '';
  var helperFunction = function (object) {
    if (typeof obj === 'number' || typeof obj === 'boolean') {
      output += obj;
    } else if (typeof obj === 'object' && obj === null) {
      output += 'null';
    } else if (typeof obj === 'string') {
      output += '"' + obj + '"';
    } else if (Array.isArray(obj)) {
      output = '[';
      for (var i = 0; i < obj.length; i++) {
        if (i < obj.length - 1) {
          output += stringifyJSON(obj[i]) + ',';
        } else {
          output += stringifyJSON(obj[i]);
        }
      }
      output += ']';
    } else if (typeof obj === 'object') {
      output += '{';
      if (Object.values(obj).length > 0) {
        for (var j in obj) {
          if (obj[j] !== undefined && typeof obj[j] !== 'function') {
            output += '"' + j + '"' + ':' + stringifyJSON(obj[j]) + ',';
          }
        }
        if (output.length > 1) {
          output = output.slice(0, output.length - 1);
        }
      }
      output += '}';
    }
  };
  helperFunction(obj);

  return output;

};
