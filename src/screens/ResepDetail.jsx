import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const resepDetails = {
  '1': { title: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce'], instructions: 'Boil pasta, cook beef, mix with sauce.' },
  '2': { title: 'Chicken Curry', ingredients: ['Chicken', 'Curry Powder', 'Coconut Milk'], instructions: 'Cook chicken, add curry powder and coconut milk.' },
  '3': { title: 'Beef Stew', ingredients: ['Beef', 'Potatoes', 'Carrots'], instructions: 'Brown beef, add vegetables and simmer.' },
};

const ResepDetail = ({ route }) => {
  const { recipeId } = route.params;
  const recipe = resepDetails[recipeId];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.header}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.text}>{ingredient}</Text>
      ))}
      <Text style={styles.header}>Instructions:</Text>
      <Text style={styles.text}>{recipe.instructions}</Text>
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
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default ResepDetail;
