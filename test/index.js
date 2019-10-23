import { ary } from '../src/index'

const fn = function (...rest) {
  for (const val of rest) {
    console.log('val: ', val)
  }
}

const cfn = ary(fn, 3)

cfn(1, 2, 3, 4)
