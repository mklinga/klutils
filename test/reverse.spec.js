import { reverse } from "../src/index.js"

describe('reverse', () => {
  it('Should be a function', () => {
    reverse.should.be.a.Function()
  })

  it('Should return an array', () => {
    reverse([]).should.be.a.Array()
  })

  it('Should reverse given array', () => {
    const data = [ 1, 2, 3, 4 ]

    reverse(data).should.eql([4, 3, 2, 1])
  })
})

