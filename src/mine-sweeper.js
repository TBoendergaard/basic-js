const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function checkCell(matrix, row, col) {
    if (matrix?.[row]?.[col] === undefined) {
      return false;
    }
    return matrix[row][col];
  }

  function calcMinesNearby(matrix, currentRowIndex, currenColIndex) {
    let sum = 0;
    for (let y = -1; y < 2; y++) {
      for (let x = -1; x < 2; x++) {
        if (!(y == 0 && x == 0)) {
          sum += checkCell(matrix, currentRowIndex + y, currenColIndex + x) ? 1 : 0;
        }
      }
    }
    return sum;
  }

  return matrix.map((row, rowIndex, rowsArray) => {
    return row.map((cell, cellIndex, cellsArray) => {
      return calcMinesNearby(rowsArray, rowIndex, cellIndex);
    })
  })
}

module.exports = {
  minesweeper
};
