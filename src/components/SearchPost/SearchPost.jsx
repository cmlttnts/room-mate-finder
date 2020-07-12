import './SearchPost.scss'

import React from 'react'
import Text from 'components/Text/Text'
import { cities, districts } from 'textContent/locations'
import { turkishSort } from 'utils/stringLib'
import DropSearchList from 'components/DropSearchList/DropSearchList'

const sortedCities = turkishSort(cities)
// const sortedDistricts = turkishSort(districts)
const SearchPost = () => (
  <div className="SearchPost">
    <label htmlFor="cityInput">
      <Text tid="city" />
    </label>
    <DropSearchList sortedItems={sortedCities} nameId="cityInput" />

    <label htmlFor="district">
      <Text tid="district" />
    </label>
  </div>
)

export default SearchPost
