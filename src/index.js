import { ary } from './lib'

const fn = function (...rest) {
  for (const val of rest) {
    console.log('val: ', val)
  }
}

const cfn = ary(fn, 3)

console.log(cfn(1, 2, 3, 4))
