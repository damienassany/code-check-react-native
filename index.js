/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import Storybook from './storybook';
import {name as appName} from './app.json';
import { configure } from 'mobx';

configure({ enforceActions: 'observed' })

// TODO export to React Native Config
const SHOW_STORYBOOK = false;

StatusBar.setBarStyle('light-content')

const EntryPoint = SHOW_STORYBOOK
    ? Storybook
    : App;

AppRegistry.registerComponent(appName, () => EntryPoint);
