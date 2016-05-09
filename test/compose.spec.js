import { compose } from "../src/index.js"

describe('compose', () => {
  it('Should be a function', () => {
    compose.should.be.a.Function()
  })

  it('Should return a function', () => {
    compose([]).should.be.a.Function()
  })

  it('Should perform right-to-left function composition', () => {
    const _value = 1
    const doubleValue = x => x * 2
    const squared = y => y * y

    const composedFunc = compose(doubleValue, squared)
    composedFunc(_value).should.be.exactly(2)

    const composedFunc2 = compose(squared, doubleValue)
    composedFunc2(_value).should.be.exactly(4)
  })
})

