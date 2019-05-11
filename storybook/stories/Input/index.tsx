import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Input } from '../../../src/shared/components/Input';
import { action } from '@storybook/addon-actions';

storiesOf('Input', module)
    .add('Default', () => <Input value="0657584593" onChangeText={action('onChangeText')} />)
    .add('With label', () => <Input label="Numéro de téléphone" value="0657584593" onChangeText={action('onChangeText')} />)