import { propEq } from "../src/index.js"

describe('propEq', () => {
  it('Should be a function', () => {
    propEq.should.be.a.Function()
  })

  it('Should return a function', () => {
    propEq().should.be.a.Function()
  })

  const lookoutObject = {
    a: true,
    b: false,
    c: 'string',
    d: 123
  }

  const test = (prop, value, expected) => 
    propEq(prop, value)(lookoutObject).should.be.exactly(expected)

  it('Should return false if the prop is not found', () => {
    test('ä', true, false)
    test('ö', false, false)
  })

  it('Should return false if the prop is found but not equal to parameter', () => {
    test('a', false, false)
    test('b', true, false)
    test('c', 'asdf', false)
    test('d', 456, false)
  })

  it('Should return true if the prop is found and equal to parameter', () => {
    test('a', true, true)
    test('b', false, true)
    test('c', 'string', true)
    test('d', 123, true)
  })
})

