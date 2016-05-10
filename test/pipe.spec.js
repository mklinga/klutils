import { pipe } from '../src/index.js'

describe('pipe', () => {
  it('Should be a function', () => {
    pipe.should.be.a.Function()
  })

  it('Should return a function', () => {
    pipe([]).should.be.a.Function()
  })

  it('Should perform left-to-right function composition', () => {
    const _value = 1
    const doubleValue = x => x * 2
    const squared = y => y * y

    const pipedFunc = pipe(doubleValue, squared)
    pipedFunc(_value).should.be.exactly(4)

    const pipedFunc2 = pipe(squared, doubleValue)
    pipedFunc2(_value).should.be.exactly(2)
  })
})

