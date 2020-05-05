// Browser environment sniffing
export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = UA && UA.indexOf('android') > 0
export const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const isPhantomJS = UA && /phantomjs/.test(UA)
export const isFF = UA && UA.match(/firefox\/(\d+)/)

export function isUndef(val) {
  return val === undefined || val === null
}

export function isDef(val) {
  return val !== undefined && val !== null
}

export function isTrue(val) {
  return val === true
}

export function isFalse(val) {
  return val === false
}


/**
 * Check if value is primitive.
 */
export function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

export function isObject(val) {
  return val !== null && typeof val === 'object'
}


/**
 * Get the raw type string of a value, e.g., [object Object].
 */
const _toString = Object.prototype.toString

export function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

export function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

export function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

export function noop () {}

/**
 * Ensure a function is called only once.
 */
export function once (fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
