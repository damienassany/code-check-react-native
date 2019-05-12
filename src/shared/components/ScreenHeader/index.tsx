import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Label } from '../Label';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../../helpers/theme';

interface Props {
    icon: string;
    label: string;
    color?: string;
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: 70
    },
    icon: {
        position: 'absolute',
        left: 10
    },
    label: {
        fontWeight: "600"
    }
});

class ScreenHeader extends PureComponent<Props> {
    public render() {
        const { icon, label, color = theme.colors.black } = this.props;

        return (
            <View style={styles.wrapper}>
                <Icon style={styles.icon} name={icon} size={theme.fs.headerIcon} color={color} />
                <Label style={styles.label} color={color} size={theme.fs.header} text={label}></Label>
            </View>
        );
    }
}

export default ScreenHeader;