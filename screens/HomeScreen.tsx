import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://5.imimg.com/data5/QN/IS/UL/SELLER-97738597/e-waste-dismantling-recycling-service-500x500.png' }} />
        <Card.Content>
          <Title>Welcome to E-Waste Education</Title>
          <Paragraph>Learn about electronic waste, calculate your carbon footprint, and discover tips to reduce e-waste.</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HomeScreen;

