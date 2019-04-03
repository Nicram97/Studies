import React, { useState } from 'react'
import './ItemsTable.css';
import TableRow from './TableRow'
import { sortBy } from './helpers';

export const ItemsTable = ({ items, changeItemsOrder, setInEditMode, setUnlockEdit }) => {
  const [productAttributeAsc, setProductAttributeAsc] = useState(true);

  return (
    <div className="divTable" >
      <div className="divTableHeading">
        <div className="divTableHead" style={{ cursor: "pointer" }} onClick={() => {
          setProductAttributeAsc(!productAttributeAsc);
          const newOrder = sortBy(items, productAttributeAsc, 'productName');
          changeItemsOrder(newOrder)
        }}>Nazwa produktu</div>
        <div className="divTableHead">Kod towaru</div>
        <div className="divTableHead">Cena netto</div>
        <div className="divTableHead">Stawka VAT</div>
        <div className="divTableHead" style={{ cursor: "pointer" }} onClick={() => {
          setProductAttributeAsc(!productAttributeAsc);
          const newOrder = sortBy(items, productAttributeAsc, 'bruttoValue');
          changeItemsOrder(newOrder)
        }}>Cena brutto</div>
        <div className="divTableHead">Kategoria towaru</div>
        <div className="divTableHead">Opcja towaru</div>
        <div className="divTableHead" style={{ cursor: "pointer" }} onClick={() => {
          setProductAttributeAsc(!productAttributeAsc);
          const newOrder = sortBy(items, productAttributeAsc, 'itemRating');
          changeItemsOrder(newOrder)
        }}>Ocena towaru</div>
        <div className="divTableHead">Zdjęcie</div>
        <div className="divTableHead">Akcje</div>
      </div>
      <div className="divTableBody">
        {items.map((item, index) =>
          <TableRow key={`item_${index}`} {...item} itemsTable={items} changeItemsTable={changeItemsOrder} setInEditMode={setInEditMode} setUnlockEdit={setUnlockEdit}/>
        )}
      </div>
    </div>
  )
}

export default ItemsTable