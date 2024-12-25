import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { List, useTheme } from 'react-native-paper';

const TipsScreen = () => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }}>
        <List.Section>
          <List.Subheader>Reduce E-Waste</List.Subheader>
          <List.Item
            title="Repair, Don't Replace"
            description="Try to repair your electronics before buying new ones."
            left={props => <List.Icon {...props} icon="tools" />}
          />
          <List.Item
            title="Donate or Sell"
            description="If your device still works, consider donating or selling it."
            left={props => <List.Icon {...props} icon="gift" />}
          />
          <List.Item
            title="Recycle Properly"
            description="Use certified e-waste recycling facilities for disposal."
            left={props => <List.Icon {...props} icon="recycle" />}
          />
          <List.Item
            title="Buy Eco-Friendly"
            description="Choose electronics with eco-friendly certifications."
            left={props => <List.Icon {...props} icon="leaf" />}
          />
        </List.Section>
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

export default TipsScreen;

