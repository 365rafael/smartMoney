import {Alert} from 'react-native';

import {getRealm} from './Realm';
import {getUUID} from './UUID';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false,
      };

      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data: ', data);
  } catch (error) {
    console.error('saveEntry :: error on save objects: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};
