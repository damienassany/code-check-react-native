import React from 'react';
import { storiesOf } from '@storybook/react-native';
import NumberBox from '../../../src/shared/components/NumberBox';

storiesOf('NumberBox', module)
    .add('Default', () => <NumberBox hasError={false} value="0" />)
    .add('With error', () => <NumberBox hasError={true} value="0" />)