import { observable, action } from 'mobx'

class CodeVerificationStore {
    @observable phoneNumber: string = '';

    @observable error: string | null = null;

    @observable code: string = '';

    @action
    updatePhoneNumber = (phoneNumber: string) => {
        this.phoneNumber = phoneNumber;
    }

    @action
    updateError = (error: string) => {
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