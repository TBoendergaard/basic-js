const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  } else if (!(date instanceof Date)
    || Object.getOwnPropertyNames(date).length
  ) {
    throw new Error('Invalid date!');
  }

  const seasonId = Math.floor((date.getMonth() + 1) / 3 % 4);
  return ["winter", "spring", "summer", "autumn"][seasonId];
}

module.exports = {
  getSeason
};
