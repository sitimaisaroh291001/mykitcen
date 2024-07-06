// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const recipes = [
  { id: '1', name: 'Spaghetti Bolognese' },
  { id: '2', name: 'Chicken Curry' },
  { id: '3', name: 'Beef Stroganoff' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyKitchen Recipes</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
