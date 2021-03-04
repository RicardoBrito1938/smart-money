/**
 * Sample React Native Test
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const Test = () => {
    const addEntry = () => {
        alert('Abrir tela de adicionar lançamento');
    };

    return (
        <View style={{padding: 10}}>
            <Text style={styles.title}>Saldo: $2.102,45</Text>
            <Button title="Adicionar" onPress={addEntry} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {fontSize: 22, fontWeight: 'bold', marginVertical: 10},
});

export default Test;
