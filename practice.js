function findPath(m, n) {
  // code here
  // m is the array of arrays.
  let path = '';
  let res = [];

  const isValidIndex = (index) => index <= n - 1 && index >= 0;

  const solve = (i, j) => {
    if (i === n - 1 && j === n - 1) {
      // reached destination, add string to result;
      res.push(path);
      return;
    } else if (i < 0 || i > n - 1 || j < 0 || j > n - 1 || m[i][j] === 0)
      return;

    if (isValidIndex(j + 1)) {
      path += 'R';
      m[i][j + 1] = 0;
      solve(i, j + 1);
      path = path.substring(0, path.length - 1);
      m[i][j + 1] = 1;
    }

    if (isValidIndex(i - 1)) {
      path += 'U';
      m[i - 1][j] = 0;
      solve(i - 1, j);
      path = path.substring(0, path.length - 1);
    }

    if (isValidIndex(i + 1)) {
      m[i + 1][j] = 0;
      path += 'D';
      solve(i + 1, j);
      path = path.substring(0, path.length - 1);
    }

    if (isValidIndex(j - 1)) {
      path += 'L';
      m[i][j - 1] = 0;
      solve(i, j - 1);
      path = path.substring(0, path.length - 1);
    }
  };

  solve(0, 0);
  console.log(res);
  return res;
}

// 1 0 0 0 1 1 0 1 1 1 0 0 0 1 1 1
let m = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];

let n = 4;
findPath(m, n);
