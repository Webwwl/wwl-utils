import { call } from '../../src/lib'

test('test function call', () => {
  const obj = {
    add (rest) {
      return rest.reduce((a, b) => a + b)
    }
  }

  expect(call('add', [1, 2, 3])(obj)).toBe(6)
})
