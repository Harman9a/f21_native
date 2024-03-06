import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './app/Tabs/Home';
import Categories from './app/Tabs/Categories';
import Account from './app/Tabs/Account';
import Notifications from './app/Tabs/Notifications';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './constants/colors';

import HomeNav from './app/components/HomeNav';
import {StatusBar, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor="white" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <HomeNav />, // Use the custom header
            tabBarIcon: ({size, color}) => (
              <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="grid-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({size, color}) => (
              <MaterialCommunityIcons
                name="account-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
