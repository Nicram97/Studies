export function nettoHandler(inputValue, setValue) {
    if(inputValue.includes('.')) {
        console.log('AAAAAA')
        setValue(inputValue)
    } else {
        const result = `${inputValue}.00`
        console.log(result)
        setValue(result)
    }
};

export function bruttoHandler(nettoValue, vatValue) {
    const bruttoValue = nettoValue * `1.${vatValue}`
    console.log(bruttoValue, nettoValue, vatValue);
    return bruttoValue;
};
