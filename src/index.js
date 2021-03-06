
import * as funcUtils from './utils/func'

export const curry = funcUtils.curry

/*
 * all() returns true if all the items pass the predicate function
 */

export const all = curry((predicate, list) => {
  return !!list.reduce && (typeof predicate === 'function') && list.reduce((result, current) => {
    return !result ? false : !!predicate(current)
  }, true)
})

/*
 * compose() perfoms right-to-left composition of the functions
 * [see pipe()]
 */
export const compose = (...fns) => {
  return pipe(...reverse(fns))
}

/*
 * identity() returns its argument unchanged
 */
export const identity = x => x

/*
 * memoize() caches the result for given argument(s)
 */

export const memoize = (fn) => {
  const results = new Map()
  return (...args) => {
    const key = args.toString()
    if (!results.get(key)) {
      results.set(key, fn(...args))
    }
    return results.get(key)
  }
}

/*
 * once() lets given function be called only once, subsequent calls return the first value
 */

export const once = (fn) => {
  let returnValue
  return (...args) => {
    if (!returnValue) {
      returnValue = fn(...args)
    }
    return returnValue
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
export const propEq = curry((prop, value, data) => {
  return data[prop] !== undefined && data[prop] === value
})

/*
 * reduce() reduces data into a single value
 */
export const reduce = curry((fn, initialValue, data) => {
  let reducedValue = initialValue
  for (let i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i])
  }
  return reducedValue
})

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
