import { itemNameRegex, itemCodeRegex } from '../../../configuration/config';

export function validateProductName(inputValue) {
    if(inputValue.match(itemNameRegex) === null) {
        return false;
    } else {
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