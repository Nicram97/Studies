import { itemNameRegex, itemCodeRegex, itemNettoPriceRegex, numbersOnly } from '../../../configuration/config';

export function validateProductName(inputValue, setGlobalValid) {
    if(inputValue.match(itemNameRegex) === null) {
        setGlobalValid(false);
        return false;
    } else {
        setGlobalValid(true);
        return true;
    }
};

export function validateProductCode(inputValue) {
    if(inputValue.match(itemCodeRegex) === null) {
        return false;
    } else {
        return true;
    }
}

export function validateNettoPrice(inputValue) {
    if(inputValue.match(itemNettoPriceRegex) === null) {
        return false;
    } else {
        return true;
    }
}

export function validateVatStake(inputValue) {
    if(inputValue.match(numbersOnly) === null) {
        return false;
    } else {
        return true;
    }
}