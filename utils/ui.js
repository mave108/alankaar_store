import { Toaster, Spinner } from '@blueprintjs/core';

var toasterInstance;
export const createToast = (props) => {
    if (process.browser) {
        toasterInstance = Toaster.create(props);
    }
    return;
}

export const toaster = () => toasterInstance;