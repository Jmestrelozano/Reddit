import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {publicationService} from '../../../data/PublicationsServices/PublicationService';
import {useAppDispatch} from '../../../domain/store/store';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(publicationService());
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>kk</Text>
    </View>
  );
};

export default HomeScreen;
