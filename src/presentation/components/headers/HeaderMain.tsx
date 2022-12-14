import {View, Text, Image} from 'react-native';
import React from 'react';
import {stylesHeaderMain} from '../../styles/headers/stylesHeaderMain';

export const HeaderMain = () => {
  return (
    <View style={stylesHeaderMain.container}>
      <View style={stylesHeaderMain.containerHeader}>
        <Image
          style={stylesHeaderMain.logo}
          source={{
            uri: 'https://www.redditinc.com/assets/images/site/reddit-logo.png',
          }}
        />
        <Text style={stylesHeaderMain.textLogo}>Reddit</Text>
      </View>
    </View>
  );
};
