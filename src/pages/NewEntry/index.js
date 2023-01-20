import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const currentBalance = 2064.35;
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const save = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: save ', data);

    saveEntry(data, entry);
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={save} />
        <Button title="Cancelar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
