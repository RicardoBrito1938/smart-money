import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 30,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <BalancePanel />
            <EntrySummary />
            <EntryList />
        </View>
    );
};

export default Main;
