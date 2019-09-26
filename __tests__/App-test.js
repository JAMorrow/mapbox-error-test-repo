/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import MapboxGL from '@react-native-mapbox-gl/maps';
var mockedMap = jest.mock('@react-native-mapbox-gl/maps');


it('renders correctly', () => {
    mockedMap.setAccessToken = jest.fn();

    renderer.create(<App />);
});
