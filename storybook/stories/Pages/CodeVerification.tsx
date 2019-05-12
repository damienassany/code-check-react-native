import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import CodeVerification from '../../../src/modules/CodeVerification/components/CodeVerification.component';

const props = {
    error: null,
    code: '12',
    phoneNumber: '0657685903',
    updatePhoneNumber: action('updatePhoneNumber'),
    updateCode: action('updateCode'),
    submit: action('submit'),
    showError: action('showError'),
    hideError: action('hideError')
}

storiesOf('CodeVerification', module)
    .add('Default', () => <CodeVerification {...props} />)