import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import BalanceLabel from '../../components/BalanceLabel';

const styles = StyleSheet.create({
  container: {padding: 10},
  value: {},
  label: {},
});

const NewEntry = () => {
  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" />
        <Button title="Cancelar" />
      </View>
    </View>
  );
};

export default NewEntry;
