// https://leetcode.com/problems/snail-traversal/description/

/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  // check to see if the input is valid.
  if (rowsCount * colsCount != this.length)
    { return }
  
  // create a empty array of size rowsCount * colsCount
  var newform = Array(rowsCount);
  for (var i = 0; i < rowsCount; ++i) {
    newform[i] = Array(colsCount);
  }

  var index = 0;
  for (var j = 0; j < colsCount; ++j) {
    // determine if we are moving up or down the rows (true for up, false for down)
    var direction = Boolean(j % 2)

    var i = direction ? rowsCount - 1 : 0;

    // fill the new form array with the values
    while (i >= 0 && i < rowsCount) {
      newform[i][j] = this[index];

      direction ? --i : ++i;
      index++;
    }
  }

  // modify the array by copying the values from newform, then deleting the rest
  for (var i = 0; i < rowsCount; ++i) {
    this[i] = newform[i];
  }

  this.splice(rowsCount, this.length - rowsCount);
}

//* Examples */

var nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
nums.snail(5,4);
console.log(JSON.stringify(nums));