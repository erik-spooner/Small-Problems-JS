// https://leetcode.com/problems/compact-object/

/**
 * Reduces the given object by removing all falsey elements 
 * @param {*} obj 
 */
var compactObject = function(obj) {

  var index = 0;
  // iterate over all elements in the object
  while (index < obj.length) {
    var subObj = obj[index];

    if (Boolean(subObj)) {
      if (subObj.length > 0)
        // recursively remove all falsey elements from this sub object
        {compactObject(subObj);}

      index += 1;
    } 
    // if the element is falsey remove it
    else {
      obj.splice(index, 1);
    }
  }
};

//* Examples */

const obj = [null, 0, false, 1, [null, 2, false]];
compactObject(obj);

console.log(JSON.stringify(obj)); // [1, [2]]

