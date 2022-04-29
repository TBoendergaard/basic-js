const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let cloneArray = JSON.parse(JSON.stringify(arr));

    if(!cloneArray.find(item => Array.isArray(item))){
      return 1;
    }

    return 1 + this.calculateDepth(
      cloneArray.reduce((prevItem, currItem) => prevItem.concat(currItem),[])
    );
  }
}

module.exports = {
  DepthCalculator
};
