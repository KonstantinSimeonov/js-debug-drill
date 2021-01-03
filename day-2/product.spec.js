const { expect } = require(`chai`);
const { product } = require(`./product`);

describe(`product of space-separated numbers`, () => {
  it(`returns 1 for empty string`, () => {
    expect(product(``)).to.equal(1);
  });

  it(`returns 1 for string that has only whitespaces`, () => {
    expect(product(`      `)).to.equal(1);
  });

  it(`returns 15 for "1 3 5 1 1"`, () => {
      expect(product(`1 3 5 1 1`)).to.equal(15);
  });

  it(`returns 0 for "492 92 93 0 2"`, () => {
    expect(product(`492 92 93 0 2`)).to.equal(0);
  });

  it(`returns 64 for "1 2 1 2 1 2 4 2"`, () => {
    expect(product(`1 2 1 2 1 2 4 2`)).to.equal(64);
  });

  it(`converts the floats to ints - 64 for "1.01 2.5 1 2.9 1.9999999 2 4 2"`, () => {
    expect(product(`1.01 2.5 1 2.9 1.9999999 2 4 2`)).to.equal(64);
  });
});
