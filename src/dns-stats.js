const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const storage = {};

  for (let address of domains) {
    let names = address.split(".").reverse();

    names.forEach((item, index) => {
      const DNS = `${index === 0 ? "" : "."}` + names.slice(0, index).join(".") + "." + item;

      if (storage.hasOwnProperty(DNS)) {
        storage[DNS]++
      } else {
        storage[DNS] = 1;
      }
    });

  }
  return storage
}

module.exports = {
  getDNSStats
};
