const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let transformedArrayData = new Array(arr.length).fill(1);

  const arrayHasIndex = (array, index) => {
    return !(array?.[index] === undefined);
  }

  const discardNext = (currentIndex) => {
    transformedArrayData[currentIndex] = 0;

    if (arrayHasIndex(transformedArrayData, currentIndex + 1)) {
      transformedArrayData[currentIndex + 1]--;
    }
  }

  const discardPrev = (currentIndex) => {
    transformedArrayData[currentIndex] = 0;

    if (arrayHasIndex(transformedArrayData, currentIndex - 1)) {
      
      transformedArrayData[currentIndex - 1]--;
    }
  }

  const doubleNext = (currentIndex) => {
    transformedArrayData[currentIndex] = 0;
    
    if (arrayHasIndex(transformedArrayData, currentIndex + 1)) {
      transformedArrayData[currentIndex + 1] += transformedArrayData[currentIndex + 1] > 0 ? 1 : 0;
    }
  }

  const doublePrev = (currentIndex) => {
    transformedArrayData[currentIndex] = 0;

    if (arrayHasIndex(transformedArrayData, currentIndex - 1)) {
      transformedArrayData[currentIndex - 1] += transformedArrayData[currentIndex - 1] > 0 ? 1 : 0;
    }
  }

  const CONTROLS = {
    '--discard-next': discardNext,
    '--discard-prev': discardPrev,
    '--double-next': doubleNext,
    '--double-prev': doublePrev,
  }

  let transfromedArray = [];
  
  arr.forEach((item, index) => {
    if (isNaN(+item) && CONTROLS.hasOwnProperty(item)) {
      CONTROLS[item](index);
    }
  })
  
  transformedArrayData.forEach((item, index) => {
    for(let i = 0; i < item; i++) {
      transfromedArray.push(arr[index]);
    }
  })

  return transfromedArray;
}


module.exports = {
  transform
};
