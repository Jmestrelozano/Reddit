import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../global/global';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator color={colors.orange} size={50} />
    </View>
  );
};
