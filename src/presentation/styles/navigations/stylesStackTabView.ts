import {StyleSheet} from 'react-native';
import {colors} from '../../global/global';

export const stylesStackTabView = StyleSheet.create({
  bgTabBar: {elevation: 6, backgroundColor: colors.orange},
  labelTabBar: {fontWeight: '500', color: colors.white},
  indicatorTabBar: {
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 2,
  },
});
