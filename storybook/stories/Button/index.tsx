import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Button from '../../../src/shared/components/Button';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
    .add('Default', () => <Button label="Renvoyer le SMS" onPress={action('pressed')} />)