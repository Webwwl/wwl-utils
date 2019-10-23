import { ary } from '../../src/lib'

test('test ary function', () => {
  const getArgs = (...rest) => rest
  const aryFnLog = ary(getArgs, 3)

  expect(aryFnLog()).toEqual([])
  expect(aryFnLog(1, 2)).toEqual([1, 2])
  expect(aryFnLog(1, 2, 3)).toEqual([1, 2, 3])
  expect(aryFnLog(1, 2, 3, 4)).toEqual([1, 2, 3])
})
