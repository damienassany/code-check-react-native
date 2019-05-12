import { CodeVerificationStore } from '../../../../stores/CodeVerification.store';
import getPhoneNumber from '../getPhoneNumber';

describe('getPhoneNumber', () => {
    it('should return phoneNumber from CodeVerificationStore', () => {
        const codeVerificationStore = new CodeVerificationStore();
        codeVerificationStore.updatePhoneNumber('0657585950');
        
        const phoneNumber = getPhoneNumber({ codeVerificationStore });
        expect(phoneNumber).toEqual('0657585950');
    })
})