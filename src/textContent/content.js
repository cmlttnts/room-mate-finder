const langs = ['tr', 'eng']
const c = {
  emptyKey: ['Boş Anahtar', 'Empty Key'],
  wrongKey: ['Yanlış Anahtar', 'Wrong Key'],
  lang: ['Dil', 'Language'],
  tr: ['TR', 'TR'],
  eng: ['İNG', 'ENG'],
  title: ['Roommate Finder', 'Roommate Finder'],
  darkMode: ['Karanlık Modu', 'Dark Mode'],
  menu: ['MENÜ', 'MENU'],
  city: ['Şehir', 'City'],
  district: ['İlçe', 'District'],
}

function getLocalText(lang = 'tr', key = 'emptyKey') {
  let langIndex = langs.indexOf(lang)
  langIndex = langIndex > -1 ? langIndex : 0

  const safeKey = Object.prototype.hasOwnProperty.call(c, key)
    ? key
    : 'wrongKey'

  return c[safeKey][langIndex]
}

export default getLocalText
