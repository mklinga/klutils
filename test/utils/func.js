import { getFunctionArguments } from '../../src/utils/func'

describe('(Utils) functions', () => {
  describe('getFunctionArguments', () => {
    it('Should return named function arguments in an array', () => {
      let f1 = function(a) { }
      let f2 = function(a, b) { }
      let f3 = function(a, b, c) { }

      getFunctionArguments(f1).should.eql([ 'a' ])
      getFunctionArguments(f2).should.eql([ 'a', 'b' ])
      getFunctionArguments(f3).should.eql([ 'a', 'b', 'c' ])

    })
    
    it('Should return an empty array with function that has no parameters', () => {
      getFunctionArguments(() => {}).should.eql([])
      let f0 = function() { }
      getFunctionArguments(f0).should.eql([])
    })

    it('Should throw an error if argument is not a function', () => {
      return new Promise((resolve, reject) => {
        try {
          getFunctionArguments(null)
        } catch (e) {
          e.message.should.equal('Not a function')
          resolve()
        }

        reject(new Error('No error catched'))
      })
    })
  })
})

