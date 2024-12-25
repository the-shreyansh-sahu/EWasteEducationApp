import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, DarkTheme, DefaultTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import LearnScreen from './screens/LearnScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import TipsScreen from './screens/TipsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Learn') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Calculator') {
                iconName = focused ? 'calculator' : 'calculator-outline';
              } else if (route.name === 'Tips') {
                iconName = focused ? 'bulb' : 'bulb-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Learn" component={LearnScreen} />
          <Tab.Screen name="Calculator" component={CalculatorScreen} />
          <Tab.Screen name="Tips" component={TipsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

