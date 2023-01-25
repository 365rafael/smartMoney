import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {TextInputMask} from 'react-native-masked-input';

import Colors from '../../../styles/Colors';

const NewEntryInput = ({value, onChangeValue}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.debitButton}>
        <Text style={styles.debitButtonPrefix}>-</Text>
        <Text style={styles.debitButtonText}>R$</Text>
      </TouchableOpacity>
      <TextInputMask
        style={styles.input}
        autoFocus={false}
        type={'money'}
        options={{
          precision: '2',
          separator: ',',
          delimiter: '.',
          unit: '',
          suffixUnit: '',
        }}
        value={value}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) =>
          onChangeValue && onChangeValue(rawValue)
        }
      />
    </View>
  );
};

export default NewEntryInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.asphalt,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  debitButton: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  debitButtonPrefix: {
    fontSize: 28,
    color: Colors.white,
  },
  debitButtonText: {
    fontSize: 28,
    color: Colors.white,
  },
  input: {
    flex: 1,
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: 20,
  },
});
