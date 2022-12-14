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
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WebViewDetails', {url: item.url})
              }
              style={{
                marginBottom: 10,
                backgroundColor: 'white',
                elevation: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
                paddingVertical: 6,
              }}>
              <View style={{flexDirection: 'column'}}>
                <View>
                  <Text style={{color: 'black'}}>{item.author}</Text>
                </View>
                <Text style={{color: 'black'}}>{item.title}</Text>
                <Image
                  resizeMode="stretch"
                  style={{width: '100%', height: 150, borderRadius: 5}}
                  source={{uri: item.image}}
                />

                <View
                  style={{
                    marginVertical: 5,
                    width: '60%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{color: 'black'}}>{item.score} Score</Text>
                  <Text style={{color: 'black'}}>
                    {item.numComments} Comments
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PublicationScreen;
