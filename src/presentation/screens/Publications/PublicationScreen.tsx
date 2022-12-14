import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../../domain/store/store';
import {
  AppStore,
  RootStackParamList,
} from '../../../domain/interfaces/global/global';
import {publicationService} from '../../../data/PublicationsServices/PublicationService';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CardPublication} from '../../components/cards/CardPublication';

type Props = NativeStackScreenProps<RootStackParamList, 'Publications'>;

const PublicationScreen = ({route, navigation}: Props) => {
  const {name} = route;
  const publications = useAppSelector(
    (store: AppStore) => store.publications.newPublications,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    //dispatch(publicationService(name));
  }, []);

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: wp(4), marginTop: hp(3)}}>
      <FlatList
        data={publications}
        keyExtractor={(_, index) => `${index}`}
        alwaysBounceVertical
        renderItem={({item}) => (
          <CardPublication navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

export default PublicationScreen;
