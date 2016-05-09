import { reduce } from "../src/index.js"

describe('reduce', () => {
  it('Should be a function', () => {
    reduce.should.be.a.Function()
  })

  it('Should return a function', () => {
    reduce().should.be.a.Function()
  })

  it('Should reduce given data based on the function', () => {
    const data = [ 1, 2, 3, 4 ]
    const func = reduce((o, v) => o + v, 0)

    func(data).should.be.exactly(10)
  })
})

