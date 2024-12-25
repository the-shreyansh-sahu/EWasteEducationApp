import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';

const CalculatorScreen = () => {
  const theme = useTheme();
  const [computers, setComputers] = useState('');
  const [smartphones, setSmartphones] = useState('');
  const [tvs, setTvs] = useState('');
  const [result, setResult] = useState(null);

  const calculateFootprint = () => {
    // This is a simplified calculation and should be replaced with more accurate data
    const footprint = 
      (parseInt(computers) || 0) * 200 + 
      (parseInt(smartphones) || 0) * 50 + 
      (parseInt(tvs) || 0) * 150;
    setResult(footprint);
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TextInput
        label="Number of Computers"
        value={computers}
        onChangeText={setComputers}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Number of Smartphones"
        value={smartphones}
        onChangeText={setSmartphones}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Number of TVs"
        value={tvs}
        onChangeText={setTvs}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={calculateFootprint} style={styles.button}>
        Calculate
      </Button>
      {result !== null && (
        <View style={styles.result}>
          <Text>Estimated Carbon Footprint:</Text>
          <Text style={styles.resultText}>{result} kg CO2e</Text>
          <Text variant={'labelSmall'}>by Shreyansh Sahu</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  result: {
    marginTop: 24,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default CalculatorScreen;

