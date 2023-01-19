import React from 'react';
import {StyleSheet, View} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySummaryChart from './EntrySummaryChart';

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </View>
  );
};

export default EntrySummary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
