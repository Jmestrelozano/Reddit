import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as size} from 'react-native-responsive-fontsize';
import {colors} from '../../../global/global';

export const stylesCardPublication = StyleSheet.create({
  container: {
    marginBottom: hp(2),
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  card: {
    flexDirection: 'column',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  containerIconProfile: {
    backgroundColor: colors.orange,
    width: wp(10),
    height: hp(5),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(1.2),
  },
  date: {color: 'grey', fontSize: size(1.4)},
  letterIcon: {
    fontFamily: 'OpenSans',
    fontSize: size(2.5),
    color: colors.white,
  },
  titleAuthor: {color: colors.black, fontSize: size(2.7)},
  desc: {color: colors.black, marginBottom: hp(0.8), fontSize: size(2.2)},
  cardImage: {width: wp('88%'), height: hp(30), borderRadius: 5},
  cardFooter: {
    marginVertical: hp(0.8),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFooter: {color: colors.black, fontSize: size(2)},
});
