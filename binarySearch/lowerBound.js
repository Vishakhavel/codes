// lower bound

let target = 2;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.sort((a, b) => a - b);
let ans = arr.length - 1;

const bsRecursive = (low, high, target) => {
  // base case
  if (low >= high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] >= target) {
    high = mid - 1;
    ans = mid;
    bsRecursive(low, high, target);
  } else {
    low = mid + 1;
    bsRecursive(low, high, target);
  }
};

const lowerBound = (target) => {
  bsRecursive(0, arr.length - 1, target);
  //   return ans;
  console.log({ ans });
};

lowerBound(target);
