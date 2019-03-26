import React from 'react';

function Content() {
    return (
        <main role="main" class="flex-shrink-0">
    <div class="container">
      <div class="row no-gutters">
        <div class="col-6 col-md-2">LEWA KOLUMNA</div>

        <div class="col-12 col-sm-6 col-md-8">
          <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Dodaj produkt</h4>
            <form class="needs-validation" novalidate>
              <div class="mb-3">
                <label for="nazwaProdukt">Nazwa produktu</label>
                <input type="text" class="form-control" id="nazwaProdukt" placeholder="masło margaryna"/>
                <div id="nazwaProdukt_Blad"></div>
                <div class="invalid-feedback">
                  Walidacja wymaga wpisania nazwy produktu.
                </div>
              </div>

              <div class="mb-3">
                <label for="kodTowar">Kod towaru</label>
                <div class="input-group">
                  <input type="text" class="form-control" id="kodTowar" placeholder="" required/>
                  <div class="invalid-feedback" style={{width: '100%'}}>
                    Walidacja wymaga kod produktu.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="cenaNetto">Cena netto</label>
                <input type="text" class="form-control" id="cenaNetto" placeholder="" required/>
                <div class="invalid-feedback">
                  Walicacja wymaga ceny netto.
                </div>
              </div>

              <div class="mb-3">
                <label for="stawkaVAT">Stawka VAT <span class="text-muted">(Opcjonalne)</span></label>
                <input type="email" class="form-control" id="stawkaVAT" placeholder="jest za duża :("/>
                <div class="invalid-feedback">
                  Stawka VAT jest opcjonalna.
                </div>
              </div>

              <div class="mb-3">
                <label for="cenaBrutto">Cena brutto</label>
                <input type="text" class="form-control" id="cenaBrutto" placeholder="" required/>
                <div class="invalid-feedback">
                  Walicacja wymaga ceny netto.
                </div>
              </div>

              <div class="mb-3">
                <label for="kategoriaTowar">Kategoria towaru</label>
                <select class="custom-select d-block w-100" id="kategoriaTowar" required>
                  <option value="">Wybierz kategorie</option>
                  <option>Narzędzia</option>
                  <option>Słodycze</option>
                  <option>Rozrywka</option>
                </select>
                <div class="invalid-feedback">
                  Wybierz jedną z kategorii produktu.
                </div>
              </div>

              <div class="mb-3">
                <label for="opcjaTowar">Opcja towaru</label>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="opcja1"/>
                  <label class="custom-control-label" for="opcja1">Pierwsza opcja towaru.</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="opcja2"/>
                  <label class="custom-control-label" for="opcja2">Druga opcja towaru.</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="opcja3"/>
                  <label class="custom-control-label" for="opcja3">Trzecia opcja towaru.</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="opcja4"/>
                  <label class="custom-control-label" for="opcja4">Czwarta opcja towaru.</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="opcja5"/>
                  <label class="custom-control-label" for="opcja5">Piata opcja towaru.</label>
                </div>
              </div>


              <div class="mb-3">
                Ocena towaru
                <div class="d-block my-3">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                      value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">1</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                      value="option2"/>
                    <label class="form-check-label" for="inlineRadio2">2</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3"
                      value="option3"/>
                    <label class="form-check-label" for="inlineRadio3">3</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4"
                      value="option4" />
                    <label class="form-check-label" for="inlineRadio4">4</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5"
                      value="option5"/>
                    <label class="form-check-label" for="inlineRadio5">5</label>
                  </div>
                </div>
                <hr class="mb-4"/>
                <button class="btn btn-primary btn-lg btn-block" type="submit">Dodaj</button>
              </div>
              </form>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <img src="mieciu.jpg" class="img-fluid" alt="Responsive image"/>
          Pozdrawiam serdecznie
        </div>
      </div>
    </div>
  </main>
    );
}

export default Content;
