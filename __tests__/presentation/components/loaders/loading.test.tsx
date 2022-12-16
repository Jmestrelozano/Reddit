import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Loading} from '../../../../src/presentation/components/loaders/Loading';

describe('component Loading.tsx', () => {
  test('loading.tsx correctly', () => {
    renderer.create(<Loading />);
  });
});
