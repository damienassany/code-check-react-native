import codeVerificationStore, { CodeVerificationStore } from './CodeVerification.store';

export interface Stores {
    codeVerificationStore: CodeVerificationStore;
}

const stores: Stores = {
    codeVerificationStore
};

export default stores;