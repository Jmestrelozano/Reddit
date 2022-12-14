import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../global/global';
import {Publication} from '../../slices/publicationsInterface';

export interface PropsCardPublication {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Publications'>;
  item: Publication;
}
