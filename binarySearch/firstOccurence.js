let arr = [1, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 8];
let index = -1;

const bs = (low, high, target) => {
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      // move as much as you can to the left.
      index = mid;
      high = mid - 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

let target = 5;
bs(0, arr.length - 1, target);
console.log(`First occurence of ${target} is ${index} `);

// NOTE - for number of occurences of an element in a sorted array -> use lastOccurence - firstOccuence + 1
