import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 30,
  },
});

const Main = () => {
  const navigation = useNavigation();
  const {navigate} = navigation;

  return (
    <View style={styles.container}>
      <BalancePanel />
      <Button title="Adicionar" onPress={() => navigate('NewEntry')} />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

export default Main;
