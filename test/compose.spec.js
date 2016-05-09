import { compose } from "../src/index.js"

describe('compose', () => {
  it('Should be a function', () => {
    compose.should.be.a.Function()
  })

  it('Should return a function', () => {
    compose().should.be.a.Function()
  })

  it('Should compose given data through the functions', () => {
    const _value = 1
    const doubleValue = x => x * 2
    const tripleValue = y => y * 3

    const composedFunc = compose(doubleValue, tripleValue)
    composedFunc(_value).should.be.exactly(6)
  })
})

