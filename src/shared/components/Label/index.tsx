import React, { SFC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../helpers/theme';
import { bindStyle } from '../../helpers/bindStyle';

const { style } = StyleSheet.create({
    style: {
        // Font-family, size, color, etc...
    }
})

interface Props {
    text: string;
    size?: number;
    color?: string;
}

export const Label: SFC<Props> = ({ text, size = theme.fs.label, color = theme.colors.black }) => <Text style={bindStyle(style, { fontSize: size, color })}>{text}</Text>;
