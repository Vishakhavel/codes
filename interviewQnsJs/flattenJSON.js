const makeFlat = (obj, flattenedResult = []) => {
  Object.keys(obj).forEach((curKey) => {
    if (Array.isArray(obj[curKey])) {
      obj[curKey].forEach((curArrElement) => {
        // console.log('curArrElement', curArrElement);
        flattenedResult.push(curArrElement);
      });
    } else if (typeof obj[curKey] === 'object' && obj[curKey] !== null) {
      makeFlat(obj[curKey], flattenedResult);
    }
  });
  return flattenedResult;
};

// Example data to flatten
const dataToMakeFlat = {
  unclassified: ['new', 'ani'],
  rock: {
    classic: ['gnr', 'acdc'],
    punk: ['nirvana', 'sex pistols'],
  },
  classical: {
    tamil: ['ill', 'arr'],
    english: ['hans', 'klaus badelt'],
  },
};

console.log(makeFlat(dataToMakeFlat));
