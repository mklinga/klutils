import { all } from '../src/index'
import sinon from 'sinon'

describe('all', () => {
  it('Should be a function', () => {
    all.should.be.a.Function()
  })

  it('Should run the predicate for all the items while it returns true', () => {
    const _predicate = sinon.spy(() => true)
    all(_predicate, [1, 2, 3])
    _predicate.callCount.should.be.exactly(3)
  })

  it('Should run the predicate for all the items while it returns truthy value', () => {
    const _predicate = sinon.spy(() => 'true')
    all(_predicate, [1, 2, 3])
    _predicate.callCount.should.be.exactly(3)
  })

  it('Should return true if all the items return truthy value', () => {
    const _predicate = sinon.spy(() => 'true')
    const result = all(_predicate, [1, 2, 3])
    result.should.be.exactly(true)
  })

  it('Should return false if first of the items return falsy value', () => {
    const _predicate = sinon.spy((item) => item === 1)
    const result = all(_predicate, [1, 2, 3])
    result.should.be.exactly(false)
  })

  it('Should return false if any of the items return falsy value', () => {
    const _predicate = sinon.spy((item) => item !== 'middle one')
    const result = all(_predicate, [1, 2, 'middle one', 2, 3])
    result.should.be.exactly(false)
  })

  it('Should return false if last of the items return falsy value', () => {
    const _predicate = sinon.spy((item) => item !== 3)
    const result = all(_predicate, [1, 2, 3])
    result.should.be.exactly(false)
  })

  it('Should return false if list does not have .reduce', () => {
    const result = all(undefined, {})
    result.should.be.exactly(false)
  })

  it('Should return false if predicate is not a function', () => {
    const result = all('yes', [1, 2, 3])
    result.should.be.exactly(false)
  })
})
