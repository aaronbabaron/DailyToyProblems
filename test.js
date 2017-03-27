import 'babel-polyfill'
import chai from 'chai'
import powerString from './powerString/powerString.js'

var expect = chai.expect;

describe("Power string", () => {
  it("Should work for values under max int", () => {
    expect('' + Math.pow(2, 2)).to.equal(powerString('2', '2'));
    expect('' + Math.pow(12, 12)).to.equal(powerString('12', '12'));
    expect('' + Math.pow(23, 4)).to.equal(powerString('23', '4'));
    expect('' + Math.pow(-3, 4)).to.equal(powerString('-3', '4'));
    expect('' + Math.pow(2, 4)).to.equal(powerString('2', '4'));
  });

  it("Should work for values above max int", () => {
    expect('1000000000000').to.equal(powerString('1000000', '2'));
  });
});
