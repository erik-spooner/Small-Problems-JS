// https://leetcode.com/problems/join-two-arrays-by-id/description/


/**
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function join(arr1, arr2) {

  // set the initial result to be equal to the first array
  var result = arr1;

  // store the index of where we are currently merging the arrays
  var index = 0;

  // iterate over the items in the second array
  for (var i = 0; i < arr2.length; i++) {
    let item = arr2[i];

    // update the index to the appropriate position
    while (index < result.length && result[index]["id"] < item["id"]) 
      { index += 1 }
    
    // if the id does not exist, simply insert the item
    if (index >= result.length || result[index]["id"] != item["id"]) {
      result.splice(index, 0, item);
      continue;
    }

    // merge the two arrays overwriting arr1 with values from arr2 when there is a conflict
    for (value in item) {
      result[index][value] = item[value];
    }
  }

  return result;
}

// example 1

var arr1 = [
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 3, "y": 6}
];

var arr2 = [
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
];

console.log(JSON.stringify(join(arr1, arr2)));

// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]


// example 2

arr1 = [
  {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
];

arr2 = [
  {"id": 1, "b": {"c": 84}, "v": [1, 3]}
];

console.log(JSON.stringify(join(arr1, arr2)));

  // Output: [
  //   {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
  // ]
