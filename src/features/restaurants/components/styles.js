import styled from 'styled-components'
import { Card } from 'react-native-paper'

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colours.ui.primary};
`

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colours.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[0]};
`

export const RatingsRow = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colours.ui.primary};
`

export const IconsRow = styled.View`
  flex-direction: row;
  align-content: center;
`

export const OpenIconRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`
