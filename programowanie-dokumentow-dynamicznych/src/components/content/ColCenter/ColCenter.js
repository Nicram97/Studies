import React, { useState } from 'react';
import InputRegular from './inputs/InputRegular'
import Select from 'react-select';
import { RadioGroup, Radio } from 'react-radio-group';

function ColCenter() {
    const [selectedValue, setSelectedValue] = useState('apple');

    const colourOptions = [
        { value: 'Narzędzia', label: 'Narzędzia' },
        { value: 'Słodycze', label: 'Słodycze' },
        { value: 'Rozrywka', label: 'Rozrywka' }
    ];
    return (
        <div className="col-12 col-sm-6 col-md-8">
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Dodaj produkt</h4>
                <form className="needs-validation" noValidate>
                    <InputRegular label={'Nazwa produktu'} defaultValue={'masło margaryna'} onBlur={(event => { console.log('SIEMA', event) })} />
                    <InputRegular label={'Kod towaru'} onBlur={(event => { console.log('Kod towaru', event) })} />
                    <InputRegular label={'Cena netto'} onBlur={(event => { console.log('Cena netto', event) })} />
                    <InputRegular label={'Stawka VAT'} defaultValue={'jest za duża :('} onBlur={(event => { console.log('Stawka VAT', event) })} />
                    <InputRegular label={'Cena brutto'} onBlur={(event => { console.log('Cena brutto', event) })} />
                    
                    <div className="mb-3">
                        <label for="kategoriaTowar">Kategoria towaru</label>
                        <Select
                            className="mb-3"
                            classNamePrefix="select"
                            defaultValue={colourOptions[0]}
                            isClearable={false}
                            name="color"
                            onChange={(event => {console.log('SELECT', event)})}
                            options={colourOptions}
                        />
                    </div>

                    <RadioGroup name="fruit" selectedValue={selectedValue} onChange={(value , event) => {console.log('Radio', value, event); setSelectedValue(value)}}>
                        <Radio value="apple" />Apple
                        <Radio value="orange" />Orange
                        <Radio value="watermelon" />Watermelon
                    </RadioGroup>

                    <div className="mb-3">
                        <label for="opcjaTowar">Opcja towaru</label>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="opcja1" />
                            <label className="custom-control-label" for="opcja1">Pierwsza opcja towaru.</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="opcja2" />
                            <label className="custom-control-label" for="opcja2">Druga opcja towaru.</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="opcja3" />
                            <label className="custom-control-label" for="opcja3">Trzecia opcja towaru.</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="opcja4" />
                            <label className="custom-control-label" for="opcja4">Czwarta opcja towaru.</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="opcja5" />
                            <label className="custom-control-label" for="opcja5">Piata opcja towaru.</label>
                        </div>
                    </div>


                    <div className="mb-3">
                        Ocena towaru
                        <div className="d-block my-3">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                                    value="option1" />
                                <label className="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                                    value="option2" />
                                <label className="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                                    value="option3" />
                                <label className="form-check-label" for="inlineRadio3">3</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                                    value="option4" />
                                <label className="form-check-label" for="inlineRadio4">4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                                    value="option5" />
                                <label className="form-check-label" for="inlineRadio5">5</label>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Dodaj</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ColCenter;