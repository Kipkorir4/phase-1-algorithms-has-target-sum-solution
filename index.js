function hasTargetSum(array, target) {
  const seen = {};

  for (let num of array) {
    const diff = target - num;
    if (seen[diff]) {
      return true;
    }
    seen[num] = true;
  }
  return false;
}

/* 
  The time complexity of this function is O(n), where n is the length of the input array.
  This is because the function iterates through the array once, performing constant-time operations for each element.
*/

/* 
  1. Create an empty object called 'seen'.
  2. Iterate through each number 'num' in the input array.
  3. Calculate the difference 'diff' between the target and 'num'.
  4. If 'diff' exists in the 'seen' object, return true (indicating that a pair has been found).
  5. Otherwise, add 'num' to the 'seen' object.
  6. If no pair adds up to the target, return false.
*/

/*
  The function iterates through the input array while keeping track of seen numbers in an object.
  For each number in the array, it calculates the difference between the target and the current number.
  If this difference has been seen before, it means there exists a pair of numbers in the array that add up to the target, so the function returns true.
  Otherwise, it adds the current number to the 'seen' object.
  If no such pair is found after iterating through the entire array, the function returns false.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

