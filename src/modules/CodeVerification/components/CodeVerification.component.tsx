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
import { fit } from '../../../shared/helpers/fit';

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
    },
    content: {
        paddingLeft: '10%',
        paddingRight: '10%',
        flexDirection: 'column',
        flex: 1
    },
    codeWrapper: {
        marginTop: fit(20),
        marginBottom: fit(20),
    },
    button: {
        marginBottom: fit(17),
        width: '70%',
        alignSelf: 'center',
        position: 'absolute',
            bottom: 0
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
            <KeyboardAvoidingView style={style.wrapper} behavior="height">
                <ScreenHeader icon="arrow-back" label="Créez votre compte" color={theme.colors.white} />

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={style.content}>
                        <Input type="phone-pad" label={{ text: "Numéro de téléphone", color: theme.colors.white}} value={phoneNumber} onChangeText={updatePhoneNumber} />

                        <View style={style.codeWrapper}>
                            <Label size={theme.fs.legend} color={theme.colors.white} text="Code de confirmation reçu par SMS" />

                            <TouchableWithoutFeedback onPress={this.focusInput}>
                                <View style={style.row}>
                                    {new Array(4).fill(1).map((item, index) => (
                                        <NumberBox style={{ margin: fit(2) }} key={`NumberBox_${index}_${item}`} value={code[index] || '_'} hasError={this.showAlert} />
                                    ))}
                                </View>
                            </TouchableWithoutFeedback>

                            <TextInput style={style.input} value={code} keyboardType="numeric" ref="input" onChangeText={updateCode} />

                            <Error style={{ marginTop: fit(7) }} error={error} />
                        </View>

                        <Button style={style.button} textColor={theme.colors.white} label="Renvoyer le SMS" onPress={() => Alert.alert('Code = 6655')} />
                    </View>
                </TouchableWithoutFeedback>
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