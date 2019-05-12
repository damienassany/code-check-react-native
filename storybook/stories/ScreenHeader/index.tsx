import React from 'react';
import { storiesOf } from "@storybook/react-native";
import ScreenHeader from '../../../src/shared/components/ScreenHeader';

storiesOf('ScreenHeader', module)
    .add('Default', () => <ScreenHeader icon="arrow-back" label="Créez votre compte" />)
    .add('With color', () => <ScreenHeader icon="arrow-back" label="Créez votre compte" color="red" />)