import 'babel-polyfill'
import chai from 'chai'
import sinon from 'sinon'
import powerString from './powerString/powerString.js'
import bac from './bullsAndCows/bullsAndCows.js'

var expect = chai.expect;

describe("Power string", () => {
  it("should not use math.pow", () => {
    var spy = sinon.spy(Math, 'pow');    

    powerString('2', '2');

    expect(spy.called).to.equal(false);

    Math.pow.restore();
  });

  it("Should work for values under max int", () => {
    expect('' + Math.pow(2, 2)).to.equal(powerString('2', '2'));
    expect('' + Math.pow(12, 12)).to.equal(powerString('12', '12'));
    expect('' + Math.pow(23, 4)).to.equal(powerString('23', '4'));
    expect('' + Math.pow(-3, 4)).to.equal(powerString('-3', '4'));
    expect('' + Math.pow(2, 4)).to.equal(powerString('2', '4'));
    expect('1000000000000').to.equal(powerString('1000000', '2'));
    expect('1000000000000').to.equal(powerString('1000000000000', '1'));
  });

});

xdescribe("Bulls and cows", () => {
  it("Should return the proper value for all guesses", () => {
    expect(bac('1023', '0231')).to.equal('0A4B');
    expect(bac('1023', '9876')).to.equal('0A0B');
    expect(bac('1111', '1110')).to.equal('3A0B');
    expect(bac('1112', '1211')).to.equal('2A2B');
  });
});
