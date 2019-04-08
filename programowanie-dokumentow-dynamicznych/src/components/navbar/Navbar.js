import React from 'react';
import Modal from 'react-modal';
import ItemsContext from '../../context/itemsList';
import { RadioGroup, Radio } from 'react-radio-group';

class Nvbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            radioValue: 'Poczta',
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <ItemsContext.Consumer>
                {context => (
                    <header>
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                            <a className="navbar-brand" href="#">Marcin Oleszczuk</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="http://lcieszynski.zut.edu.pl/fileadmin/DPD/instrukcja_2019.pdf">Instrukcja</a>
                                    </li>
                                    <li className="nav-item" style={{ cursor: "pointer" }}>
                                        <a className="nav-link" tabIndex="-1" onClick={() => this.props.upload.click()}>Wczytaj z pliku</a>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-primary" onClick={() => {
                                        context.enterCart(context.products)
                                        this.openModal()
                                    }}>
                                    Koszyk
                            </button>
                            </div>
                        </nav>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                            <button onClick={this.closeModal}>close</button>
                            <div className="divTable" >
                                <div className="divTableHeading">
                                    <div className="divTableHead">Nazwa</div>
                                    <div className="divTableHead">Cena brutto</div>
                                    <div className="divTableHead">Ilość sztuk</div>
                                </div>
                                <div className="divTableBody">
                                    {context.cart.map((item, index) =>
                                        <div className="divTableRow" key={index}>
                                            <div className="divTableCell">{item.productName}</div>
                                            <div className="divTableCell">{item.bruttoValue}</div>
                                            <div className="divTableCell">
                                                <input defaultValue={item.quantity} onBlur={(event) => {
                                                        const siema = context.cart.map(prod => {
                                                            if (prod.productName === item.productName) {
                                                                prod.quantity = event.target.value
                                                                prod.bruttoValue = prod.bruttoValue * event.target.value
                                                                return prod
                                                            } else {
                                                                return prod
                                                            }
                                                        });
                                                        context.changeProductsList(siema)
                                                    }
                                                }/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <RadioGroup className="mb-3" name="fruit" selectedValue={this.state.radioValue} onChange={(value, event) => this.setState({radioValue: value})}>
                                Ocena towaru
                                <div className="d-block my-3">
                                    <div className="form-check form-check-inline">
                                        <Radio className="form-check form-check-inline" value="Poczta" />
                                        <label className="form-check-label">Poczta</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Radio className="form-check form-check-inline" value="Kurier" />
                                        <label className="form-check-label">Kurier</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <Radio className="form-check form-check-inline" value="Osobiście" />
                                        <label className="form-check-label">Osobiście</label>
                                    </div>
                                </div>
                            </RadioGroup>
                            <button onClick={() => {
                                context.cartBuy()
                            }}>Kup</button>
                        </Modal>
                    </header>
                )}
            </ItemsContext.Consumer>
        );
    }
}

export default Nvbar;
