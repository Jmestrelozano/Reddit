import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useAppDispatch} from '../../../domain/store/store';
import {setDataPublication} from '../../../domain/store/slices/publicationsSlices';
import {stylesOfflineScreen} from '../../styles/screens/offline/stylesOfflineScreeen';

export const OfflineScreen = ({
  children,
  value,
}: {
  children: JSX.Element;
  value?: string;
}) => {
  const [isNotFound, setIsNotFound] = useState<boolean | null>(false);
  const [callMe, setCallMe] = useState(false);
  const [refreh, setRefresh] = useState(false);
  const dispatch = useAppDispatch();
  const handleNetInfo = () => {
    NetInfo.addEventListener(state => {
      console.log(state.isConnected);
      setIsNotFound(state.isConnected);
    });
  };

  const callCached = () => {
    if (value !== undefined) {
      dispatch(setDataPublication(value));
      setCallMe(true);
    }
  };
  useEffect(() => {
    handleNetInfo();
  }, [isNotFound]);

  useEffect(() => {
    if (refreh && !isNotFound) {
      Alert.alert('Connection', 'Without connection ', [
        {text: 'OK', onPress: () => setRefresh(false)},
      ]);
    }
  }, [refreh]);

  console.log(callMe);
  return (
    <View style={{flex: 1}}>
      {!isNotFound && !callMe ? (
        <View style={stylesOfflineScreen.container}>
          <Text style={stylesOfflineScreen.textBlack}>
            sorry we lost your connection
          </Text>

          <View style={stylesOfflineScreen.containerButtons}>
            <TouchableOpacity
              onPress={callCached}
              style={stylesOfflineScreen.buttonLoader}>
              <Text style={stylesOfflineScreen.textWhite}>
                load cached view
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleNetInfo();
                setRefresh(true);
              }}
              style={stylesOfflineScreen.buttonRefresh}>
              <Text style={stylesOfflineScreen.textBlack}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        children
      )}
    </View>
  );
};
