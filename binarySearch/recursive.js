// Time Complexity = O(Log2N)

let arr = [2, 4, 3, 5, 7, 8, 8, 9, 9, 10, 32];
arr.sort((a, b) => a - b);

let target = 9;

const bsRecursive = (low, high) => {
  // base case
  if (low > high) {
    return -1;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    high = mid - 1;
    return bsRecursive(low, high);
  } else {
    low = mid + 1;
    return bsRecursive(low, high);
  }
};

console.log(bsRecursive(0, arr.length - 1));
