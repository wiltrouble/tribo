import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogInScreen from '../screens/LogInScreen';
import TopBarComponent from '../components/TopBarComponent';
import SplasScreen from '../screens/SplasScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TopBarComponent />
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
        <Tab.Screen name='Home' component={LogInScreen}/>
        <Tab.Screen name='SplasScreen' component={SplasScreen}/>
        <Tab.Screen name='Settings2' component={SettingsScreen}/>
        <Tab.Screen name='Settings3' component={SettingsScreen}/>
        <Tab.Screen name='LogIn' component={HomeScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation