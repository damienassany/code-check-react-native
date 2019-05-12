/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import stores from './src/stores';
import CodeVerificationContainer from './src/modules/CodeVerification/containers/CodeVerification.container';

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...stores}>
        <CodeVerificationContainer />
      </Provider>
    );
  }
}