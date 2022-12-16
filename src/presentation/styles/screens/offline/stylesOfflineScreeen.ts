import {StyleSheet} from 'react-native';
import {colors} from '../../../global/global';

export const stylesOfflineScreen = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  containerButtons: {
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 17,
    justifyContent: 'space-around',
  },
  buttonLoader: {
    backgroundColor: colors.orange,
    padding: 10,
    borderRadius: 12,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonRefresh: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 12,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  textBlack: {color: colors.black},
  textWhite: {color: colors.white},
});
