import { once } from '../src/index'
import sinon from 'sinon'

describe('once', () => {
  let _fn, _onced

  beforeEach(() => {
    _fn = sinon.spy((x, y) => x * y)
    _onced = once(_fn)
  })

  it('Should be a function', () => {
    once.should.be.a.Function()
  })

  it('Should let the given function be called', () => {
    _onced(2, 3).should.equal(6)
  })

  it('Should let the given function be called only once', () => {
    _onced(2, 3).should.equal(6)
    _onced(2, 3).should.equal(6)
    _onced(2, 3).should.equal(6)

    _fn.callCount.should.equal(1)
  })

  it('Should return the first result on subsequent calls despite given parameters', () => {
    const _firstValue = _onced(2, 3)

    _onced(4, 6).should.equal(_firstValue)
    _onced(8, 190).should.equal(_firstValue)
    _onced(null, null).should.equal(_firstValue)
  })
})
