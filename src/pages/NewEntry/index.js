import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry, deleteEntry} from '../../services/Entries';

import Colors from '../../styles/Colors';
import NewEntryInput from './NewEntryInput';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }

    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: onSave ', data);

    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput value={amount} onChangeValue={setAmount} />

        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Câmera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => isValid() && onSave()} />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </View>
  );
};

export default NewEntry;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});
