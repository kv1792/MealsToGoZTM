import React from 'react'
import { SearchBar } from '../../../shared-components/searchbar'
import { RestaurantInfo } from '../components/restaurant-info-card'
import { SafeArea, SearchContainer, RestaurantListContainer } from './styles'

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  )
}
