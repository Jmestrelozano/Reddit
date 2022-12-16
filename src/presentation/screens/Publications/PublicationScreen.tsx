import {FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppDispatch, useAppSelector} from '../../../domain/store/store';
import {
  AppStore,
  RootStackParamList,
  TypeStatus,
} from '../../../domain/interfaces/global/global';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CardPublication} from '../../components/cards/CardPublication';
import {Loading} from '../../components/loaders/Loading';
import {thunkAsyncService} from '../../../data/PublicationsServices/thunkAsyncService';
import {OfflineScreen} from '../offline/OfflineScreen';

type Props = NativeStackScreenProps<RootStackParamList, 'Publications'>;

const PublicationScreen = ({route, navigation}: Props) => {
  const {name} = route;
  const {newPublications: publications, statusPublications} = useAppSelector(
    (store: AppStore) => store.publications,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const actionFetch = navigation.addListener('focus', () => {
      dispatch(thunkAsyncService(name));
    });

    return () => navigation.removeListener('beforeRemove', actionFetch);
  }, [name]);

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: wp(4), marginTop: hp(3)}}>
      {statusPublications === TypeStatus.LOADING ? (
        <Loading />
      ) : (
        <OfflineScreen value={name}>
          <FlatList
            data={publications}
            keyExtractor={(_, index) => `${index}`}
            alwaysBounceVertical
            renderItem={({item}) => (
              <CardPublication navigation={navigation} item={item} />
            )}
          />
        </OfflineScreen>
      )}
    </SafeAreaView>
  );
};

export default PublicationScreen;
