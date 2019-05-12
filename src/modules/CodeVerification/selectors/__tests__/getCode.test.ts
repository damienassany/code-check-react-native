import { CodeVerificationStore } from '../../../../stores/CodeVerification.store';
import getCode from '../getCode';

describe('getCode', () => {
    it('should return code from CodeVerificationStore', () => {
        const codeVerificationStore = new CodeVerificationStore();
        codeVerificationStore.updateCode('1234');
        
        const code = getCode({ codeVerificationStore });
        expect(code).toEqual('1234');
    })
})