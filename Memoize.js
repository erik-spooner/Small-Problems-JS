// https://leetcode.com/problems/memoize/description/


// Returns a memoized version of the given function that contains a cache. When the function is called it checks to see if the
// value for the given input has already been calculated.
function memoize(fn) {

  let cache = {};

  return function(...args) {
    
    // check to see if the value has been calculated before
    if (args in cache) {
      console.log("Value has already been calculated so retrieve from cache");
      return cache[args]
    }
    
    let value = fn(...args);
 
    console.log("Calculated new value adding it to the cache");
    cache[args] = value;
    return cache[args];
  }
}


/* Examples */

// example function add
function add(a, b) {
  return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1,1)); // 2 calculated
console.log(memoizedAdd(1,1)); // 2 retrieved from cache
console.log(memoizedAdd(2,3)); // 5 calculated
console.log(memoizedAdd(3,2)); // 5 calculated (no logic for 2 + 3 = 3 + 2)
console.log(memoizedAdd(2,3)); // 5 retrieved from cache



// example function factorial
function factorial(n) {
  if (n > 1) {
    return factorial(n - 1) * n
  }
  
  return 1
}

const memoizedFact = memoize(factorial);

console.log(memoizedFact(5)); // 120 calculated (note only caches 5! as during recursion we are not using the memoized version of the function)
console.log(memoizedFact(3)); // 6 calculated
console.log(memoizedFact(5)); // 120 retrieved

