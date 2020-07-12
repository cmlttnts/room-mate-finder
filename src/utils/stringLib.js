/**
 * case insensitive string search, returns true if match
 * @param subString string to be searched
 * @param bigString string to be searched for
 */
function includesStr(subString, bigString) {
  if (!subString || !bigString) return false
  return subString.toLowerCase().includes(bigString.toLowerCase())
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
