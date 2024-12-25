import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { List, useTheme } from 'react-native-paper';

const LearnScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <List.Section>
        <List.Subheader>What is E-Waste?</List.Subheader>
        <List.Item
          title="Definition"
          description="Electronic waste, or e-waste, refers to discarded electrical or electronic devices."
          left={props => <List.Icon {...props} icon="information" />}
        />
        <List.Item
          title="Common Types"
          description="Computers, televisions, VCRs, stereos, copiers, and fax machines."
          left={props => <List.Icon {...props} icon="devices" />}
        />
      </List.Section>
      <List.Section>
        <List.Subheader>Environmental Impact</List.Subheader>
        <List.Item
          title="Toxic Materials"
          description="E-waste contains toxic materials like lead, mercury, and cadmium."
          left={props => <List.Icon {...props} icon="alert" />}
        />
        <List.Item
          title="Resource Depletion"
          description="Improper disposal leads to loss of valuable materials like gold and copper."
          left={props => <List.Icon {...props} icon="earth" />}
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

export default LearnScreen;

