import React, { useState, useEffect } from 'react';
import InputRegular from './inputs/InputRegular'
import Select from 'react-select';
import { RadioGroup, Radio } from 'react-radio-group';
import CheckBox from './CheckboxList/Checkbox';
import logo from '../../../assets/favicon.ico'
import ItemsTable from '../../ItemsTable/ItemsTable';
import { validateProductName, validateProductCode, validateVatStake, validateNettoPrice } from './validators';
import { nettoHandler, bruttoHandler, createNotification } from './helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ColCenter() {
    const notify = () => toast.error("Item present in list!");
    const colourOptions = [
        { value: 'Narzędzia', label: 'Narzędzia' },
        { value: 'Słodycze', label: 'Słodycze' },
        { value: 'Rozrywka', label: 'Rozrywka' }
    ];

    const [radioValue, setRadioValue] = useState('1');
    const [category, setCategory] = useState(colourOptions[0]);
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [isFirstChecboxChecked, setisFirstChecboxChecked] = useState(false);
    const [isSecondChecboxChecked, setisSecondChecboxChecked] = useState(false);
    const [isThirdChecboxChecked, setisThirdChecboxChecked] = useState(false);
    const [isFourthChecboxChecked, setisFourthChecboxChecked] = useState(false);
    const [isFifthChecboxChecked, setisFifthChecboxChecked] = useState(false);
    const [nettoValue, setNettoValue] = useState('');
    const [vatValue, setVatValue] = useState(23);
    const [bruttoValue, setBruttoValue] = useState('');
    const [itemOptionsCount, setItemOptionsCount] = useState(0);
    const [disabledNext, setDisabledNext] = useState(true);
    const [tableItems, setTableItems] = useState([]);

    // VALIDATIONS
    const [nameValid, setNameValid] = useState(false);
    const [productIdValid, setProductIdValid] = useState(false);
    const [nettoAmountValid, seNettoAmountValid] = useState(false);

    useEffect(() => {
        if ((nettoValue !== '') && (vatValue !== '')) {
            setBruttoValue(bruttoHandler(nettoValue, vatValue));
        }

        if ((nameValid && productIdValid && nettoAmountValid && itemOptionsCount >= 2)) {
            setDisabledNext(false);
        }
    });


    return (
        <div className="col-12 col-sm-6 col-md-8">
            <ToastContainer />
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Dodaj produkt</h4>
                <form className="needs-validation" noValidate >
                    <InputRegular label={'Nazwa produktu'} defaultValue={'masło'} invalidMessage={'tylko litery, max długość 10 znaków, pole obowiązkowe'} validator={validateProductName} setGlobalValid={setNameValid} onBlur={(event) => setProductName(event.target.value)} />
                    <InputRegular label={'Kod towaru'} invalidMessage={'format XX-XX cyfry i litery (bez znaków specjalnych), pole obowiązkowe'} validator={validateProductCode} setGlobalValid={setProductIdValid} onBlur={(event) => setProductId(event.target.value)} />
                    <InputRegular label={'Cena netto'} value={nettoValue} invalidMessage={'Niepoprawna wartość'} validator={validateNettoPrice} setGlobalValid={seNettoAmountValid} onChange={(event) => { setNettoValue(event.target.value) }} onBlur={(event => nettoHandler(event.target.value, setNettoValue))} />
                    <InputRegular label={'Stawka VAT'} defaultValue={vatValue} invalidMessage={'tylko cyfry, pole obowiązkowe'} validator={validateVatStake} onBlur={(event => { setVatValue(event.target.value) })} />
                    <InputRegular label={'Cena brutto'} disabled={true} value={bruttoValue} validator={() => { return true }} />

                    <div className="mb-3">
                        <label htmlFor="kategoriaTowar">Kategoria towaru</label>
                        <Select
                            className="mb-3"
                            classNamePrefix="select"
                            defaultValue={colourOptions[0]}
                            isClearable={false}
                            name="color"
                            onChange={(event => { console.log('SELECT', event); setCategory(event.value) })}
                            options={colourOptions}
                        />
                    </div>
                    <div className="mb-3">Opcja towaru</div>
                    <ul className="mb-3 list-nopadding">
                        <CheckBox id={1} value={"Pierwsza opcja towaru."} isChecked={isFirstChecboxChecked} handleCheckChieldElement={() => { setItemOptionsCount(isFirstChecboxChecked ? itemOptionsCount - 1 : itemOptionsCount + 1); setisFirstChecboxChecked(!isFirstChecboxChecked) }} />
                        <CheckBox id={2} value={"Druga opcja towaru."} isChecked={isSecondChecboxChecked} handleCheckChieldElement={() => { setItemOptionsCount(isSecondChecboxChecked ? itemOptionsCount - 1 : itemOptionsCount + 1); setisSecondChecboxChecked(!isSecondChecboxChecked) }} />
                        <CheckBox id={3} value={"Trzecia opcja towaru."} isChecked={isThirdChecboxChecked} handleCheckChieldElement={() => { setItemOptionsCount(isThirdChecboxChecked ? itemOptionsCount - 1 : itemOptionsCount + 1); setisThirdChecboxChecked(!isThirdChecboxChecked) }} />
                        <CheckBox id={4} value={"Czwarta opcja towaru."} isChecked={isFourthChecboxChecked} handleCheckChieldElement={() => { setItemOptionsCount(isFourthChecboxChecked ? itemOptionsCount - 1 : itemOptionsCount + 1); setisFourthChecboxChecked(!isFourthChecboxChecked) }} />
                        <CheckBox id={5} value={"Piata opcja towaru."} isChecked={isFifthChecboxChecked} handleCheckChieldElement={() => { setItemOptionsCount(isFifthChecboxChecked ? itemOptionsCount - 1 : itemOptionsCount + 1); setisFifthChecboxChecked(!isFifthChecboxChecked) }} />
                    </ul>
                    {itemOptionsCount < 2 &&
                        <div className="invalid-feedback" style={{ display: "block" }}>checkbox z 5 opcjami do zaznaczenia, 2 muszą być wybrane, </div>
                    }

                    <RadioGroup className="mb-3" name="fruit" selectedValue={radioValue} onChange={(value, event) => { console.log('Radio', value); setRadioValue(value) }}>
                        Ocena towaru
                        <div className="d-block my-3">
                            <div className="form-check form-check-inline">
                                <Radio className="form-check form-check-inline" value="1" />
                                <label className="form-check-label">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Radio className="form-check form-check-inline" value="2" />
                                <label className="form-check-label">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Radio className="form-check form-check-inline" value="3" />
                                <label className="form-check-label">3</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Radio className="form-check form-check-inline" value="4" />
                                <label className="form-check-label">4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Radio className="form-check form-check-inline" value="5" />
                                <label className="form-check-label">5</label>
                            </div>
                        </div>
                    </RadioGroup>
                    <img src={logo} alt="Product" />
                    <hr className="mb-4" />
                    <button disabled={disabledNext} className="btn btn-primary btn-lg btn-block" type="submit"
                        onClick={(event) => {
                            event.preventDefault()
                            const isItemFound = tableItems.find((element) => { console.log('element!', element); return element.productName === productName; })
                            if (isItemFound) {
                                notify();
                            } else {
                            const newItem = {
                                productName: productName,
                                productId: productId,
                                nettoValue: nettoValue,
                                vatValue: vatValue,
                                bruttoValue: bruttoValue,
                                category: category,
                                itemOptions: [
                                    (isFirstChecboxChecked ? 'Pierwszy' : undefined),
                                    (isSecondChecboxChecked ? 'Drugi' : undefined),
                                    (isThirdChecboxChecked ? 'Trzeci' : undefined),
                                    (isFourthChecboxChecked ? 'Czwarty' : undefined),
                                    (isFifthChecboxChecked ? 'Piąty' : undefined)
                                ],
                                itemRating: radioValue,
                                itemIcon: logo,
                            };
                            const newItems = tableItems.concat([newItem]);
                            setTableItems(newItems);
                        }}}>Dodaj</button>
                </form>
            </div>
            <ItemsTable items={tableItems} />
        </div>
    );
}

export default ColCenter;