import React, { PureComponent } from 'react';
import { View, StyleSheet, PixelRatio } from 'react-native';
import { Label } from '../Label';
import { bindStyle } from '../../helpers/bindStyle';
import { theme } from '../../helpers/theme';
import { fit } from '../../helpers/fit';

interface Props {
    value: string;
    hasError: boolean;
}

const styles = StyleSheet.create({
    wrapper: {
        padding: fit(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderRadius: 5,
        width: fit(20),
        height: fit(20)
    }
});

class NumberBox extends PureComponent<Props> {
    public render() {
        const { value, hasError } = this.props;
        const wrapper = bindStyle(styles.wrapper, { borderColor: hasError ? theme.colors.red : theme.colors.lightBlue });
        const color = hasError ? theme.colors.red : theme.colors.black;

        return (
            <View style={wrapper}>
                <Label text={value} color={color} />
            </View>
        );
    }
}

export default NumberBox;