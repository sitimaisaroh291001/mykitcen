import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesList from './src/screens/RecipesList';
import RecipeDetail from './src/screens/RecipeDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RecipesList">
        <Stack.Screen name="RecipesList" component={RecipesList} options={{ title: 'Recipes' }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetail} options={{ title: 'Recipe Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
