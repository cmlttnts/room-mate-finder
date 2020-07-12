/**
 * case insensitive string search, returns true if match
 * @param toBeSearched string to be searched
 * @param seachedFor string to be searched for
 */
function includesStr(toBeSearched, seachedFor) {
  return toBeSearched.toLowerCase().includes(seachedFor.toLowerCase())
}

export default includesStr

export function turkishSort(arr) {
  return [...arr].sort((a, b) =>
    a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase(), 'tr'),
  )
}
