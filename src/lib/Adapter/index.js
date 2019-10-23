/**
 * 创建一个接受固定参数的函数
 *
 * @param {*} fn
 * @param {*} n
 */
export const ary = (fn, n) => (...args) => fn(...args.slice(0, n))

export const call = (key, ...args) => ctx => ctx[key](...args)
