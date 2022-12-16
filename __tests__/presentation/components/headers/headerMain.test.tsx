import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {HeaderMain} from '../../../../src/presentation/components/headers/HeaderMain';

describe('component HeaderMain.tsx', () => {
  test('HeaderMain.tsx correctly', () => {
    renderer.create(<HeaderMain />);
  });
});
