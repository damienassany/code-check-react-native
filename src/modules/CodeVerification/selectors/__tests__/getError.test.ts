import { CodeVerificationStore } from '../../../../stores/CodeVerification.store';
import getError from '../getError';

describe('getError', () => {
    it('should return error from CodeVerificationStore', () => {
        const codeVerificationStore = new CodeVerificationStore();
        codeVerificationStore.updateError('An error occured.');
        
        const error = getError({ codeVerificationStore });
        expect(error).toEqual('An error occured.');
    })
})