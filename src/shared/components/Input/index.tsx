import React, { SFC } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../helpers/theme';
import { Label } from '../Label';

type Keyboard = "default" | "email-address" | "numeric" | "phone-pad" | "visible-password" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | undefined;

interface Props {
    onChangeText: () => void;
    value: string;
    type?: Keyboard;
    label?: {
        text: string;
        size?: string;
        color?: string;
    };
}

const styles = StyleSheet.create({
    input: {
        borderColor: theme.colors.lightBlue,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: 'transparent',
        color: theme.colors.white,
        width: '100%'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%'
    },
    label: {
        marginBottom: 5
    }
});

export const Input: SFC<Props> = ({ onChangeText, value, type = "default", label = null}) => (
    <View style={styles.wrapper}>
        { label && <Label color={label.color || theme.colors.black} size={theme.fs.legend} text={label.text} style={styles.label} /> }
        <TextInput keyboardType={type} style={styles.input} onChangeText={onChangeText} value={value} />
    </View>
)