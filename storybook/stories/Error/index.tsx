import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Error from '../../../src/shared/components/Error';

const error = "Code incorrect. Touchez \"renvoyer le code\" si vous n'avez rien reçu.";

storiesOf('Error', module)
    .add('Default', () => <Error error={error} />);