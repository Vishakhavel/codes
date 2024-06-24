const arr = [1, 2, 3, 4],
  res = [];

const backtrack = (start, end) => {
  if (start > end || end === arr.length) return;

  res.push(arr.slice(start, end + 1));

  backtrack(start, end + 1);
  backtrack(start + 2, end);
};

backtrack(0, 0);
console.log('All contiguos subarrays -', res);


 \resumeSubHeadingListStart
      \resumeProjectHeading
           % {\titleItem}
      \resumeItemListStart