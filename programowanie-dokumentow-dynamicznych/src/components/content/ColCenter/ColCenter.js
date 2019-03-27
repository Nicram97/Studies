import React, { useState } from 'react';
import InputRegular from './inputs/InputRegular'
import Select from 'react-select';
import { RadioGroup, Radio } from 'react-radio-group';
import CheckBox from './CheckboxList/Checkbox';
import logo from '../../../assets/favicon.ico'

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
                        <div className = "mb-3">Opcja towaru</div>
                    <ul className="mb-3 list-nopadding">
                        <CheckBox id={1} value={"Pierwsza opcja towaru."} isChecked={false} />
                        <CheckBox id={2} value={"Druga opcja towaru."} isChecked={false} />
                        <CheckBox id={3} value={"Trzecia opcja towaru."} isChecked={false} />
                        <CheckBox id={4} value={"Czwarta opcja towaru."} isChecked={false} />
                        <CheckBox id={5} value={"Piata opcja towaru."} isChecked={false} />
                    </ul>
            

                    <RadioGroup className="mb-3" name="fruit" selectedValue={selectedValue} onChange={(value , event) => {console.log('Radio', value, event); setSelectedValue(value)}}>
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
                    <img src={logo} alt="Product"/>
                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Dodaj</button>
                </form>
            </div>
        </div>
    );
}

export default ColCenter;