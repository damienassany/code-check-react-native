import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Label } from '../Label';
import { theme } from '../../helpers/theme';

interface Props {
    onPress: () => void;
    label: string;
    textColor?: string;
    style?: any;
}

const style = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderColor: theme.colors.lightBlue,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Button extends PureComponent<Props> {
    render() {
        const { onPress, label, textColor = theme.colors.black, style: styleFromProps = {} } = this.props;

        return (
            <TouchableOpacity
                style={StyleSheet.flatten([style.button, styleFromProps])}
                onPress={onPress}
            >
                <Label size={theme.fs.legend} color={textColor} text={label} />
            </TouchableOpacity>
        );
    }
}

export default Button;