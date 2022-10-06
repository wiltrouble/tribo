import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
        <Tab.Screen name='Settings2' component={SettingsScreen}/>
        <Tab.Screen name='Settings3' component={SettingsScreen}/>
        <Tab.Screen name='Settings4' component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation