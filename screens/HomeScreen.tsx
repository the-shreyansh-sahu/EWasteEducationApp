import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }} contentContainerStyle={{ padding: 16 }}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://assets.techrepublic.com/uploads/2023/07/tr71823-ewaste-au-770x513.jpeg' }} />
          <Card.Content>
            <Title>Welcome to E-Waste Education</Title>
            <Paragraph>Learn about electronic waste, calculate your carbon footprint, and discover tips to reduce e-waste.</Paragraph>
          </Card.Content>
        </Card>
        
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Learn')}
            style={styles.button}
          >
            Learn About E-Waste
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Calculator')}
            style={styles.button}
          >
            Calculate Footprint
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Tips')}
            style={styles.button}
          >
            E-Waste Reduction Tips
          </Button>
        </View>
      </ScrollView>
      <View style={styles.watermarkContainer}>
        <Text style={[styles.watermark, { color: theme.colors.onSurface + '80' }]}>by Shreyansh Sahu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    marginBottom: 12,
  },
  watermarkContainer: {
    paddingBottom: 8,
    paddingTop: 4,
    backgroundColor: 'transparent',
  },
  watermark: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default HomeScreen;

