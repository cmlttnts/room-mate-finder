/**
 * case insensitive string search, returns true if match
 * @param biggerString string to be searched
 * @param subString string to be searched for
 */
function includesStr(biggerString, subString) {
  if (!biggerString) return false
  if (!subString) {
    if (subString !== '') return false
  }
  return biggerString.toLowerCase().includes(subString.toLowerCase())
}

export default includesStr

/**
 * Sorts array of strings in Turkish
 * @param arr array to be sorted
 */
export function turkishSort(arr) {
  if (!arr) return arr
  return [...arr].sort((a, b) =>
    a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase(), 'tr'),
  )
}
