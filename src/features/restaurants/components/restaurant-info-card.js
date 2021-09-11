import React from 'react'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Image, Text, View } from 'react-native'
import {
  RestaurantCard,
  Info,
  Title,
  IconsRow,
  RatingsRow,
  OpenIconRow,
  Address,
} from './styles'

export const RestaurantInfo = ({
  name = 'Restaurant Name',
  icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
  photos = ['https://picsum.photos/700'],
  address = '100 some random street',
  isOpenNow = true,
  rating = 4,
  isClosedTemporarily = true,
}) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)))

  return (
    <RestaurantCard elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <IconsRow>
          <RatingsRow>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </RatingsRow>
          <OpenIconRow>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ marginLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
            <Image
              style={{ marginLeft: 16, width: 15, height: 15 }}
              source={{ uri: icon }}
            />
          </OpenIconRow>
        </IconsRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  )
}
