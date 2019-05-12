import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { theme } from '../../../shared/helpers/theme';
import ScreenHeader from '../../../shared/components/ScreenHeader';
import { Input } from '../../../shared/components/Input';
import { Label } from '../../../shared/components/Label';
import NumberBox from '../../../shared/components/NumberBox';
import Error from '../../../shared/components/Error';
import Button from '../../../shared/components/Button';
import { observer } from 'mobx-react';

interface Props {
    error: string | null;
    code: string;
    phoneNumber: string;
    updatePhoneNumber: () => void;
    updateCode: () => void;
    submit: (code: string) => Promise<any>;
    showError: () => void;
    hideError: () => void;
}

const style = StyleSheet.create({
    wrapper: {
        backgroundColor: theme.colors.blue,
        flex: 1
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        display: 'none'
    }
});

@observer
export default class CodeVerification extends Component<Props> {
    // Getters
    public get showAlert() {
        return this.props.error !== null;
    }
    
    public render() {
        const { error, code, phoneNumber, updateCode, updatePhoneNumber } = this.props;

        return (
            <KeyboardAvoidingView style={style.wrapper}>
                <ScreenHeader icon="arrow-back" label="Créez votre compte" color={theme.colors.white} />

                <View style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                    <Input type="phone-pad" label="Numéro de téléphone" value={phoneNumber} onChangeText={updatePhoneNumber} />

                    <Label color={theme.colors.white} text="Code de confirmation reçu par SMS" />

                    <TouchableWithoutFeedback onPress={this.focusInput}>
                        <View style={style.row}>
                            {new Array(4).fill(1).map((item, index) => (
                                <NumberBox key={`NumberBox_${index}_${item}`} value={code[index] || '_'} hasError={this.showAlert} />
                            ))}
                        </View>
                    </TouchableWithoutFeedback>

                    <TextInput style={style.input} value={code} keyboardType="numeric" ref="input" onChangeText={updateCode} />

                    <Error error={error} />

                    <Button textColor={theme.colors.white} label="Renvoyer le SMS" onPress={() => Alert.alert('Code = 6655')} />
                </View>
            </KeyboardAvoidingView>
        );
    }

    // Lifecycles
    public componentWillReceiveProps(nextProps: Props) {
        const { code, showError, hideError, submit } = nextProps;
        const codeHasChanged = code !== this.props.code;
        const codeIsFullfilled = code.length === 4;
        
        if (codeHasChanged && codeIsFullfilled) {
            submit(code).then((res: any) => {
                if (res.err) {
                    showError()
                } else {
                    Alert.alert('Code is valid !')
                    hideError()
                }
            });
        }
    }

    // Methods
    public focusInput = () => {
        (this.refs as any).input.focus();
    }
}