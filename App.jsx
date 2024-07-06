import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResepList from './src/screens/ResepList';
import ResepDetail from './src/screens/ResepDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ResepList">
        <Stack.Screen name="ResepList" component={ResepList} options={{ title: 'Resep' }} />
        <Stack.Screen name="ResepDetail" component={ResepDetail} options={{ title: 'Resep Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
