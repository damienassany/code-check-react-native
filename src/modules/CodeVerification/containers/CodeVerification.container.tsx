import { inject } from "mobx-react";
import CodeVerification from "../components/CodeVerification.component";
import getPhoneNumber from "../selectors/getPhoneNumber";
import { Stores } from "../../../stores";
import getCode from "../selectors/getCode";
import getError from "../selectors/getError";

const mapStoreToProps = (stores: Stores) => {
    const { codeVerificationStore: {
        updatePhoneNumber,
        updateCode,
        updateError
    } } = stores;

    return {
        phoneNumber: getPhoneNumber(stores),
        code: getCode(stores),
        error: getError(stores),
        updatePhoneNumber,
        updateCode,
        submit: (code: string) => code === "6655" ? Promise.resolve({ err: false}) : Promise.resolve({ err: true }),
        showError: () => updateError('Code incorrect. Touchez "renvoyer le code" si vous n\'avez rien reçu.'),
        hideError: () => updateError(null),
    };
}

export default inject(mapStoreToProps)(CodeVerification);
