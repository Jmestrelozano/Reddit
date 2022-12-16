import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {CardPublication} from '../../../../src/presentation/components/cards/CardPublication';
import {PropsCardPublication} from '../../../../src/domain/interfaces/components/cards/cardPrublicationInterface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../src/domain/interfaces/global/global';

describe('component PublicationScreen.tsx', () => {
  const navigationprops: NativeStackNavigationProp<
    RootStackParamList,
    'Publications'
  > = {
    dispatch: jest.fn(),
    goBack: jest.fn(),
    navigate: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
  } as jest.Mocked<any>;

  const props: PropsCardPublication = {
    navigation: navigationprops,
    item: {
      author: 'jorge',
      created: 209393,
      image: '',
      numComments: 2,
      score: 2,
      title: 'este es mi post',
      url: '',
    },
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('PublicationScreen.tsx correctly', () => {
    renderer.create(<CardPublication {...props} />);
  });

  it('should be navigate to another page', () => {
    const component = renderer.create(<CardPublication {...props} />);
    const card: any = component.toJSON();

    renderer.act(() => card.props.onClick());

    expect(navigationprops.navigate).toBeCalled();
  });
});
