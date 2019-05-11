/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Storybook from './storybook';
import {name as appName} from './app.json';

// TODO export to React Native Config
const SHOW_STORYBOOK = true;

const Component = SHOW_STORYBOOK
    ? Storybook
    : App;

AppRegistry.registerComponent(appName, () => Component);
