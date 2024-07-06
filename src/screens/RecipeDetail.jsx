// src/screens/RecipeDetail.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const recipeDetails = {
  '1': { name: 'Spaghetti Bolognese', ingredients: 'Spaghetti, Tomato Sauce, Beef', instructions: 'Cook spaghetti, add sauce and beef.' },
  '2': { name: 'Chicken Curry', ingredients: 'Chicken, Curry Powder, Coconut Milk', instructions: 'Cook chicken, add curry powder and coconut milk.' },
  '3': { name: 'Beef Stroganoff', ingredients: 'Beef, Mushrooms, Sour Cream', instructions: 'Cook beef, add mushrooms and sour cream.' },
};

const RecipeDetail = ({ route }) => {
  const { recipeId } = route.params;
  const recipe = recipeDetails[recipeId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Ingredients:</Text>
      <Text>{recipe.ingredients}</Text>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default RecipeDetail;
