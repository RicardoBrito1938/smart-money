import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const styles = StyleSheet.create({
  container: {padding: 10},
  value: {},
  label: {},
});

const Report = () => {
  return (
    <View>
      <BalanceLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias" value="all" />
          <Picker.Item label="Últimos 7 dias" value="last" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

export default Report;
