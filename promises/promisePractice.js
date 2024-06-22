const fetchData1 = fetch('https://randomuser.me/api').then((response) =>
  response.json()
);
const fetchData2 = fetch('https://randomuser.me/api').then((response) =>
  response.json()
);
const fetchData3 = fetch('https://randomuser.me/apiq').then((response) =>
  response.json()
);

// Promise.all([fetchData1, fetchData2, fetchData3])
// Promise.allSettled([fetchData1, fetchData2, fetchData3])
Promise.race([fetchData3, fetchData2, fetchData1])
  // Promise.any([fetchData1, fetchData2, fetchData3])
  .then((results) => {
    // results is an array with the resolved values of the promises
    // const [data1, data2, data3] = results;
    // console.log('Data 1:', data1);
    // console.log('Data 2:', data2);
    // console.log('Data 3:', data3);
    console.log({ results });
  })
  .catch((error) => {
    console.error('One of the fetches failed:', error);
  });
