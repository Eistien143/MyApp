import * as React from 'react';
// import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigator/TabNavigator';
import MovieDetails from './src/screen/MovieDetails';
import SeatBookingScreen from './src/screen/SeatBookingScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return <NavigationContainer >
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} options={{ animation: 'default' }} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="SeatBooking" component={SeatBookingScreen} options={{ animation: 'slide_from_bottom' }} />
    </Stack.Navigator>
  </NavigationContainer>;


};

export default App;
