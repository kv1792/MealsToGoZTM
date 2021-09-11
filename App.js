import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { RestaurantScreen } from './src/features/restaurants/screens/restaurant-screen'
import { theme } from './src/infrastructure/theme'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'

export default function App() {
  // StatusBar.currentHeight basically returns the right amount of height on top to be left out for time/date/network etc
  // SafeAreaView is only for iOS. For Android, we do the workaround with the help of StatusBar.currentHeight

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar />
      </ThemeProvider>
    </>
  )
}
