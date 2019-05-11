import React from 'react';
import { Label } from "../../../src/shared/components/Label";
import { storiesOf } from "@storybook/react-native";

storiesOf('Label', module)
    .add('Default', () => <Label text="Hello Storybook" />)
    .add('with color', () => <Label text="Hello Storybook" color="red" />)
    .add('with size', () => <Label text="Hello Storybook" size={40} />)