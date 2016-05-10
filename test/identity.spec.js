import { identity } from '../src/index'

describe('identity', () => {
  it('Should be a function', () => {
    identity.should.be.a.Function()
  })

  it('Should return the argument unchanged', () => {
    identity(10).should.equal(10)
    identity('string').should.equal('string')

    const obj = { a: 1 }
    identity(obj).should.equal(obj) // equality by '==='

    const fn = () => {}
    identity(fn).should.equal(fn)
  })
})

