import React, { SFC } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { theme } from '../../helpers/theme';
import { Label } from '../Label';

interface Props {
    onChangeText: () => void;
    value: string;
    label?: string;
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

export const Input: SFC<Props> = ({ onChangeText, value, label = null}) => (
    <View style={styles.wrapper}>
        { label && <Label text={label} style={styles.label} /> }
        <TextInput style={styles.input} onChangeText={onChangeText} value={value} />
    </View>
)