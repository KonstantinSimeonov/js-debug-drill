/**
 * @description
 * Takes a row of integers separated by whitespaces and calculates
 * the product of the integers. 
 *
 * @param {string} numberString - Numbers separated by an arbitrary count of whitespaces
 * @returns {number} - The product of the numbers. Any floats should be converted to ints.
 */
const product = numberString =>
  numberString
    .split(` `)
    .map(parseInt)
    .reduce((prod, n) => prod * n, 1);

module.exports = { product };
