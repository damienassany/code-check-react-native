import { inject } from "mobx-react";
import CodeVerification from "./component";

const mapStoreToProps = (stores: any) => {
    const { codeVerificationStore } = stores;
    const { phoneNumber, code, error, updatePhoneNumber, updateCode, updateError } = codeVerificationStore;

    return {
        phoneNumber,
        code,
        error,
        updatePhoneNumber,
        updateCode,
        submit: (code: string) => code === "6655" ? Promise.resolve({ err: false}) : Promise.resolve({ err: true }),
        showError: () => updateError('Code incorrect. Touchez "renvoyer le code" si vous n\'avez rien reçu.'),
        hideError: () => updateError(null),
    };
}

export default inject(mapStoreToProps)(CodeVerification);
