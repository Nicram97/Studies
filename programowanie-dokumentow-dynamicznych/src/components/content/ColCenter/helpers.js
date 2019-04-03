export function nettoHandler(inputValue, setValue) {
    if (inputValue.includes('.')) {
        setValue(inputValue)
    } else {
        const result = `${inputValue}.00`
        setValue(result)
    }
};

export function bruttoHandler(nettoValue, vatValue) {
    const bruttoValue = nettoValue * `1.${vatValue}`
    return bruttoValue;
};

export function arrayContains(string, arrayOfStrings) {
    return (arrayOfStrings.indexOf(string) > -1);
}