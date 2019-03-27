import React from 'react'
import './ItemsTable.css';
import TableRow from './TableRow'

export const ItemsTable = ({items}) => {
  return (
    <div className="divTable" styleName="width: 9%;" >
        <div className="divTableHeading">
            <div className="divTableHead">Nazwa produktu</div>
            <div className="divTableHead">Kod towaru</div>
            <div className="divTableHead">Cena netto</div>
            <div className="divTableHead">Stawka VAT</div>
            <div className="divTableHead">Cena brutto</div>
            <div className="divTableHead">Kategoria towaru</div>
            <div className="divTableHead">Kategoria towaru</div>
            <div className="divTableHead">Ocena towaru</div>
            <div className="divTableHead">Zdjęcie</div>
        </div>
        <div className="divTableBody">
            {items.map((item, index) => 
                <TableRow key={`item_${index}`} {...item}/>
            )}
        </div>
    </div>
  )
}

export default ItemsTable