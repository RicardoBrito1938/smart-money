import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  title: {fontSize: 22, fontWeight: 'bold', marginVertical: 10},
});

const EntryListItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Últimos lançamentos</Text>

      <FlatList
        data={[
          {key: 'Padaria asa branca: $200'},
          {key: 'Supermercado Isadora: $12'},
          {key: 'Posto Ipiranda: $120'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

export default EntryListItem;
