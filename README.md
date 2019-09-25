# mapbox-error-test-repo
Reproduction of a build error for Stack Overflow.

To reproduce:

```
git clone https://github.com/JKowalsky/mapbox-error-test-repo.git
cd mapbox-error-test-repo
yarn install
yarn test

```

Error seen:

```
$ jest --no-cache
 FAIL  __tests__/App-test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /Users/jennifer/dev/mapbox-error-test-repo/node_modules/@react-native-mapbox-gl/maps/javascript/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){import {Animated, NativeModules, PermissionsAndroid} from 'react-native';
                                                                                                    ^

    SyntaxError: Unexpected token {

      25 | } from 'react-native/Libraries/NewAppScreen';
      26 |
    > 27 | import MapboxGL from '@react-native-mapbox-gl/maps';
         | ^
      28 | MapboxGL.setAccessToken('fakeyfakeytokentoken');
      29 |
      30 | const App: () => React$Node = () => {

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:579:25)
      at Object.<anonymous> (App.js:27:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        2.741s
Ran all test suites.
```
