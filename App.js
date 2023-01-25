import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        // screenOptions={{headerShown: false}}
        screenOptions={({route}) => ({
          // headerShown: false,

          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home-outline' : 'ios-home-sharp';
            } else if (route.name === 'Settings') {
              iconName = focused
                ? 'ios-settings-outline'
                : 'ios-settings-sharp';
            } else if (route.name === 'Details') {
              iconName = focused
                ? 'ios-information-circle-outline'
                : 'ios-information-circle-sharp';
            } else if (route.name === 'History') {
              iconName = focused ? 'log-in-outline' : 'log-in-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          // tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            marginVertical: 10,
            height: 60,
            marginHorizontal: 20,
            borderRadius: 20,
            shadowColor: 'red',
            shadowOffset: {
              width: 20,
              height: 25,
              elevation: 3,
            },
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'Details',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
