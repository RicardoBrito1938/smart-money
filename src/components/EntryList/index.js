import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntryListItem from './EntryListItem';

const styles = StyleSheet.create({
    container: {},
});

const EntryList = () => {
    return (
        <View>
            <EntryListItem />
        </View>
    );
};

export default EntryList;
