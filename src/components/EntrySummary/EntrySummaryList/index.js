import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {},
    title: {fontSize: 22, fontWeight: 'bold', marginVertical: 10},
});

const EntrySummaryList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            <FlatList
                data={[
                    {key: 'Alimentação: $200'},
                    {key: 'Combustivel: $12'},
                    {key: 'Aluguel: $120'},
                    {key: 'Lazer: $250'},
                    {key: 'Outros: $1200'},
                ]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        </View>
    );
};

export default EntrySummaryList;
