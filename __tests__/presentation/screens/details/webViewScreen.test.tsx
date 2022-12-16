import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import WebViewScreen from '../../../../src/presentation/screens/details/WebViewScreen';

describe('component WebViewScreen.tsx', () => {
  test('WebViewScreen.tsx correctly', () => {
    const props = {
      route: {params: {url: ''}},
    };
    renderer.create(<WebViewScreen {...props} />);
  });
});
