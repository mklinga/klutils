/*
 * compose() perfoms right-to-left composition of the functions
 * [see pipe()]
 */
export const compose = (...fns) => {
  return pipe(...reverse(fns))
}

/*
 * curry() curries any given function
 */
export const curry = function (fn) {
  const originalArguments = fn.toString().match(/\(.*?\)/)[0].replace(/[()]/gi,'').replace(/\s/gi,'').split(',');

  const makeCurriedFunc = function() {
    const givenArguments = arguments
    if (givenArguments.length < originalArguments.length) {
      return function(...rest) {
        return makeCurriedFunc(...givenArguments, ...rest)
      }
    }
    else { 
      return fn(...givenArguments)
    }
  }

  return function() {
    return makeCurriedFunc(...arguments)
  }
}

/*
 * pipe() perfoms left-to-right composition of the functions
 * [see compose()]
 */
export const pipe = (...fns) => {
  return data => reduce((v, fn) => fn(v), data)(fns)
}

/*
 * propEq() returns true if current object has a property and it equals given value
 * [see compose()]
 */
export const propEq = (prop, value) => {
  return data => {
    return data[prop] !== undefined && data[prop] === value
  }
}

/*
 * reduce() reduces data into a single value
 */
export const reduce = (fn, initialData) => {
  return data => {
    let reducedData = initialData
    for (let i = 0; i < data.length; i++) {
      reducedData = fn(reducedData, data[i])
    }
    return reducedData
  }
}

/*
 * reverse() reverses array
 */
export const reverse = (items) => {
  let result = []
  for (let i = items.length - 1; i >= 0; i--) {
    result.push(items[i])
  }
  return result
}
