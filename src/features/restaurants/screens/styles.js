import styled from 'styled-components'
import { SafeAreaView, StatusBar } from 'react-native'

export const SafeArea = styled(SafeAreaView)`
  flex: 1
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  //This is done this way to make sure it works on iOS because iOS doesn't support currentHeight
`

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`

export const RestaurantListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`
