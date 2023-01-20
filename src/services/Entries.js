import {Alert} from 'react-native';

import {getRealm} from './Realm';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  console.log('getEntries :: entries', JSON.stringify(entries));

  return entries;
};

export const saveEntry = async value => {
  const realm = await getRealm();
  let data = {};

  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: amount,
        description: 'bbbbb',
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true); // esse true quer dizer que se tiver o mesmo id ele atualiza
    });
    console.log('saveEntry :: data: ', data);
  } catch (error) {
    console.error('saveEntry :: error on save objects: ', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};
