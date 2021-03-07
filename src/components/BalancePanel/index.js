import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

const BalancePanel = () => {
  return (
    <View style={styles.container}>
      <BalancePanelLabel />
      <BalancePanelChart />
      <Button onPress={() => {}} title="Adicionar" />
    </View>
  );
};

export default BalancePanel;
