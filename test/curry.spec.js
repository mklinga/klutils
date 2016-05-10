import { curry } from '../src/index.js'
import should from 'should'

describe('curry', () => {
  let _add, _curried

  beforeEach(() => {
    _add = (a, b, c, d) => a + (2 * b) + (3 * c) + (4 * d)

    _curried = curry(_add)
  })

  it('Should be a function', () => {
    curry.should.be.a.Function()
  })

  it('Should return a function', () => {
    _curried.should.be.a.Function()
  })

  it('Should be able to give parameters all at once', () => {
    _curried(1, 2, 3, 4).should.equal(1 + 2 * 2 + 3 * 3 + 4 * 4)
    _curried(3, 5, 8, 13).should.equal(3 + 5 * 2 + 8 * 3 + 13 * 4)
  })

  it('Should be able to give first argument separately', () => {
    _curried(1)(2, 3, 4).should.equal(1 + 2 * 2 + 3 * 3 + 4 * 4)
    _curried(3)(5, 8, 13).should.equal(3 + 5 * 2 + 8 * 3 + 13 * 4)
  })

  it('Should be able to give last argument separately', () => {
    _curried(1, 2, 3)(4).should.equal(1 + 2 * 2 + 3 * 3 + 4 * 4)
    _curried(3, 5, 8)(13).should.equal(3 + 5 * 2 + 8 * 3 + 13 * 4)
  })

  it('Should be able to give first and last argument separately', () => {
    _curried(1)(2, 3)(4).should.equal(1 + 2 * 2 + 3 * 3 + 4 * 4)
    _curried(3)(5, 8)(13).should.equal(3 + 5 * 2 + 8 * 3 + 13 * 4)
  })

  it('Should be able to give all the arguments separately', () => {
    _curried(1)(2)(3)(4).should.equal(1 + 2 * 2 + 3 * 3 + 4 * 4)
    _curried(3)(5)(8)(13).should.equal(3 + 5 * 2 + 8 * 3 + 13 * 4)
  })

  it('Should handle function with no arguments', () => {
    should(curry(() => null)()).equal(null)
    should(curry(() => undefined)()).equal(undefined)
    curry(() => 2)().should.equal(2)
    curry(() => 'string')().should.equal('string')
  })
})

