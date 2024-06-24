/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length,
    n2 = nums2.length;
  // rearrange so that the first array is smaller than the second.
  if (n1 > n2) return findMedianSortedArrays(nums2, nums1);

  let combinedLength = n1 + n2;
  let left = Math.floor((combinedLength + 1) / 2);

  let low = 0,
    high = n1;
  console.log('came inside');
  while (low <= high) {
    console.log({ low, high });
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;

    let l1 = Number.MIN_VALUE,
      l2 = Number.MIN_VALUE;
    let r1 = Number.MAX_VALUE,
      r2 = Number.MAX_VALUE;

    if (mid1 - 1 >= 0) l1 = nums1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = nums2[mid2 - 1];

    if (mid1 <= n1 - 1) r1 = nums1[mid1];
    if (mid2 <= n2 - 1) r2 = nums2[mid2];

    console.log({ l1, l2, r1, r2 });

    if (l1 <= r2 && l2 <= r1) {
      // base case reached.
      let median;

      if (combinedLength % 2 === 0) {
        // even
        median = Math.max(l1, l2) + Math.min(r1, r2);
        // no need to floor
        median = median / 2;
      } else {
        median = Math.max(l1, l2);
      }
      return median;
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }

  //   outside the while loop
  return -1;
};

let num1 = [1, 3],
  num2 = [2];

console.log(findMedianSortedArrays(num1, num2));
