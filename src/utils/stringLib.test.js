import includesStr, { turkishSort } from 'utils/stringLib'

test('finds a substring in a string', () => {
  expect(includesStr('asdf', 'asdf')).toEqual(true)
})
test('empty strings returns false', () => {
  expect(includesStr('', '')).toEqual(false)
})
test('null or undefined returns false', () => {
  expect(includesStr('asdf', null)).toEqual(false)
  expect(includesStr(null, 'asd')).toEqual(false)
  expect(includesStr(undefined, 'asd')).toEqual(false)
  expect(includesStr('asdf', undefined)).toEqual(false)
})
