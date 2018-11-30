const { browserDetect } = require('..')

test('definition', () => {
  expect(typeof browserDetect.blink).toBe('function')
  expect(typeof browserDetect.chrome).toBe('function')
  expect(typeof browserDetect.edge).toBe('function')
  expect(typeof browserDetect.firefox).toBe('function')
  expect(typeof browserDetect.gecko).toBe('function')
  expect(typeof browserDetect.ie).toBe('function')
  expect(typeof browserDetect.safari).toBe('function')
  expect(typeof browserDetect.silk).toBe('function')
  expect(typeof browserDetect.trident).toBe('function')
  expect(typeof browserDetect.webkit).toBe('function')
})
