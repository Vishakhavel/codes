let arr = [2, 4, 3, 5, 7, 8, 8, 9, 9, 10, 32];
arr.sort((a, b) => a - b);

// sorted array

let low = 0,
  high = arr.length - 1,
  mid = 0;
const binarySearch = (arr, target) => {
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      console.log('FOUND AT INDEX', mid);
      return mid;
    }
  }
};

console.log(binarySearch(arr, 5));
