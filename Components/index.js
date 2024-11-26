import { StyleSheet, Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>LETRO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    alignItems: 'center',      // Center horizontally
    justifyContent: 'center',  // Center vertically
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#ffffff',          // White text for better visibility
    fontSize: 24,
    fontWeight: 'bold',
  },
});
