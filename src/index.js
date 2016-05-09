/*
 * compose() perfoms right-to-left composition of the functions
 */
export const compose = (...fns) => {
  return data => reduce((v, fn) => fn(v), data)(reverse(fns))
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
