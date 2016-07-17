/*
 * curry() curries any given function
 */
export const curry = function (fn) {
  const originalArguments = getFunctionArguments(fn) || []

  const makeCurriedFunc = function () {
    const givenArguments = arguments || []
    if (givenArguments.length < originalArguments.length) {
      return function (...rest) {
        return makeCurriedFunc(...givenArguments, ...rest)
      }
    } else {
      return fn(...givenArguments)
    }
  }

  return function () {
    return makeCurriedFunc(...arguments)
  }
}

export const getFunctionArguments = function (fn) {
  if (typeof fn !== 'function') {
    throw new Error('Not a function')
  }

  const functionAsString = fn.toString()

  const args = functionAsString
    .match(/\(.*?\)/)[0]    // match everything between brackets
    .replace(/[()]/gi, '')   // remove brackets
    .replace(/\s/gi, '')     // remove all whitespace
    .split(',')            // split on the commas

  return args.filter(x => x) // remove possible empty string from the result
}

