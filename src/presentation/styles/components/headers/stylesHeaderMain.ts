import {StyleSheet} from 'react-native';
import {colors} from '../../../global/global';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as size} from 'react-native-responsive-fontsize';

export const stylesHeaderMain = StyleSheet.create({
  container: {backgroundColor: colors.orange, flex: 1},
  containerHeader: {
    flex: 1,
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('25%'),
    justifyContent: 'space-between',
  },
  logo: {width: wp(10), height: hp(10), resizeMode: 'contain'},
  textLogo: {
    fontFamily: 'OpenSans-Italic',
    fontSize: size(1.8),
    color: 'white',
    fontWeight: '700',
  },
});
