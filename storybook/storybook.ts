/* eslint-disable global-require */
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
export default StorybookUI;