import { StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Selamat Datang di My Kitchen</Text>
      <Text style={styles.qoute}>Resep Masakan Favorit Kamu</Text>
    </View>
  )
}

export default App;
const styles = StyleSheet.create({})