import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Label } from '../Label';
import { theme } from '../../helpers/theme';
import { fit } from '../../helpers/fit';

interface Props {
    error: string;
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.colors.red,
        padding: fit(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: '100%'
    },
    icon: {
        flex: 1
    },
    label: {
        flex: 9
    }
});

class Error extends PureComponent<Props> {
    render() {
        const { error } = this.props;
        return (
            <View style={style.wrapper}>
                <Icon style={style.icon} name="closecircle" color={theme.colors.white} size={20} />
                <Label style={style.label} size={theme.fs.small} text={error} color={theme.colors.white} />
            </View>
        );
    }
}

export default Error;