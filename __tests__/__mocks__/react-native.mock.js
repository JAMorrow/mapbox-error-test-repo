jest.mock('react-native/Libraries/Image/resolveAssetSource', () => {
  return () => ({uri: 'asset://test.png'});
});

require('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => {
  function MockEventEmitter() {}
  MockEventEmitter.prototype.addListener = function() {};
  MockEventEmitter.prototype.removeListener = function() {};
  return MockEventEmitter;
});
