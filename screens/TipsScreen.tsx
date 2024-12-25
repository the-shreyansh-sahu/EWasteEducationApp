import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

const TipsScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TipsScreen;

