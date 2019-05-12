import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CodeVerification from '../../../src/modules/CodeVerification/component';
import { action } from '@storybook/addon-actions';

const props = {
    error: null,
    code: '12',
    phoneNumber: '0657685903',
    submit: action('submit'),
    onError: action('onError'),
    onSuccess: action('onSuccess')
}

storiesOf('CodeVerification', module)
    .add('Default', () => <CodeVerification {...props} />)