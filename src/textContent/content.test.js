import getLocalText from 'textContent/content'

it('correcty gets local text', () => {
  expect(getLocalText('tr', 'tr')).toEqual('TR')
})

it('correcty shows wrong key', () => {
  expect(getLocalText('tr', '')).toEqual('Yanlış Anahtar')
})

it('correcty shows empty key', () => {
  expect(getLocalText('tr')).toEqual('Boş Anahtar')
})
