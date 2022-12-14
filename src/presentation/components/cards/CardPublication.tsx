import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {PropsCardPublication} from '../../../domain/interfaces/components/cards/cardPrublicationInterface';
import {stylesCardPublication} from '../../styles/cards/stylesCardPublication';
import {convertFormatEpochToLocal} from '../../utils/convertFormatEpochToLocal';
import {firstLetter} from '../../utils/firstLetter';

export const CardPublication = ({navigation, item}: PropsCardPublication) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('WebViewDetails', {url: item.url})}
      style={stylesCardPublication.container}>
      <View style={stylesCardPublication.card}>
        <View style={stylesCardPublication.cardHeader}>
          <View style={stylesCardPublication.containerIconProfile}>
            <Text style={stylesCardPublication.letterIcon}>
              {firstLetter(item.author)}
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={stylesCardPublication.titleAuthor}>{item.author}</Text>
            <Text style={stylesCardPublication.date}>
              {convertFormatEpochToLocal(item.created)}
            </Text>
          </View>
        </View>

        <Text style={stylesCardPublication.desc}>{item.title}</Text>
        <Image
          resizeMode="stretch"
          style={stylesCardPublication.cardImage}
          source={{uri: item.image}}
        />

        <View style={stylesCardPublication.cardFooter}>
          <Text style={stylesCardPublication.textFooter}>
            {item.score} Score
          </Text>
          <Text style={stylesCardPublication.textFooter}>
            {item.numComments} Comments
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
