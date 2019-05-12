/* eslint-disable global-require */
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories/Button');
  require('./stories/Error');
  require('./stories/Label');
  require('./stories/Input');
  require('./stories/NumberBox');
  require('./stories/ScreenHeader');
  require('./stories/Pages/CodeVerification')
}, module);

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
export default StorybookUI;
