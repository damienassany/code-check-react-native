import React, { SFC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../helpers/theme';
import { bindStyle } from '../../helpers/bindStyle';

const { label } = StyleSheet.create({
    label: {
        // Font-family, size, color, etc...
    }
})

interface Props {
    text: string;
    size?: number;
    color?: string;
    style?: any;
}

export const Label: SFC<Props> = ({ text, size = theme.fs.label, color = theme.colors.black, style = {} }) => <Text style={bindStyle(StyleSheet.flatten([style, label]), { fontSize: size, color })}>{text}</Text>;
