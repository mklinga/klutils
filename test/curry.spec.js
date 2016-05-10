import { curry } from "../src/index.js"

describe.only('curry', () => {
  let _add, _curried

  beforeEach(() => {
    _add = (a, b, c) => a + b + c

    _curried = curry(_add)
  })

  it('Should be a function', () => {
    curry.should.be.a.Function()
  })

  it('Should return a function', () => {
    _curried.should.be.a.Function()
  })

  it('Should be able to give parameters all at once', () => {
    _curried(1, 2, 3).should.equal(6)
    _curried(3, 5, 8).should.equal(16)
  })

  it('Should be able to give first argument separately', () => {
    _curried(1)(2, 3).should.equal(6)
    _curried(3)(5, 8).should.equal(16)
  })

  it('Should be able to give last argument separately', () => {
    _curried(1, 2)(3).should.equal(6)
    _curried(3, 5)(8).should.equal(16)
  })

  it('Should be able to give all the arguments separately', () => {
    _curried(1)(2)(3).should.equal(6)
    _curried(3)(5)(8).should.equal(16)
  })
})

