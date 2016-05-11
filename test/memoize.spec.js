import sinon from 'sinon'
import { memoize } from '../src/index'

describe('memoize', () => {
  let _func, _memoized

  beforeEach(() => {
    _func = sinon.spy(x => 2 * x)
    _memoized = memoize(_func)
  })
  it('Should be a function', () => {
    memoize.should.be.a.Function()
  })

  it('Should return result from the given function', () => {
    _memoized(2).should.equal(4)
    _memoized(3).should.equal(6)
  })

  it('Should call given function only once for the same arguments', () => {
    _memoized(3).should.equal(6)
    _memoized(3).should.equal(6)

    _func.callCount.should.equal(1)
  })

  it('Should handle multiple parameters', () => {
    let _func2 = sinon.spy((x, y) => x * y)
    let _memoized2 = memoize(_func2)

    _memoized2(3, 5).should.equal(15)
    _memoized2(3, 5).should.equal(15)
    _memoized2(3, 5).should.equal(15)
    _func2.callCount.should.equal(1)

    _memoized2(3, 4).should.equal(12)
    _memoized2(3, 4).should.equal(12)
    _func2.callCount.should.equal(2)
  })
})

