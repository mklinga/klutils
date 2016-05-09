/*
 * compose takes a list of functions and returns a function that takes the data as its argument
 */
export const compose = (...fns) => {
  return data => fns.reduce((v, fn) => fn(v), data)
}
