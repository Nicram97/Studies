import React from 'react'
import { Card, Dropdown } from 'react-bootstrap';
import logo from '../../assets/favicon.ico'
import './CardsView.css'

export const CardsView = ({ products }) => {
    return (
        <div className="parent">
            {products.map((product, index) =>
                <Card className="child" key={`card_${index}`}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>{product.productName}</Card.Title>
                        {console.log(product)}
                        <Card.Text>
                            Netto: {product.nettoValue}
                            <br/>
                            Brutto: {product.bruttoValue}
                        </Card.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <i className='fa fa-cog fa-3x'></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="#/action-1" onClick={() => { setInEditMode(productName); setUnlockEdit(true) }}>Edytuj</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={() => {
                                    const newItemsTable = products.filter(item => item.productName !== productName && item)
                                    changeItemsTable(newItemsTable);
                                }}>Usuń</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default CardsView