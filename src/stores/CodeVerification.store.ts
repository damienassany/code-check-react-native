import { observable, action } from 'mobx'

type Error = string | null;

export class CodeVerificationStore {
    @observable phoneNumber: string = '';

    @observable error: Error = null;

    @observable code: string = '';

    @action
    updatePhoneNumber = (phoneNumber: string) => {
        this.phoneNumber = phoneNumber;
    }

    @action
    updateError = (error: Error) => {
        this.error = error;
    }

    @action
    updateCode = (code: string) => {
        if (code.length <= 4) {
            this.code = code;
        }
    }
}

const store = new CodeVerificationStore();

export default store;