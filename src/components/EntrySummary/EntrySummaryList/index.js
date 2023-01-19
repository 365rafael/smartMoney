import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

export default EntrySummaryList;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});
