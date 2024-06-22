function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}

// Example usage
const promise1 = new Promise((resolve, reject) =>
  setTimeout(() => reject('Promise 1 resolved'), 500)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('Promise 2 resolved'), 100)
);
const promise3 = new Promise((_, reject) =>
  setTimeout(() => reject('Promise 3 rejected'), 200)
);

customPromiseRace([promise1, promise2, promise3])
  .then((result) => {
    console.log('Race resolved with:', result);
  })
  .catch((error) => {
    console.log('Race rejected with:', error);
  });
