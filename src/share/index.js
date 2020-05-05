export function debounceFn(fn, delayTime = 0) {
  let timer = null
  return function (...rest) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, rest)
    }, delayTime);
  }
}