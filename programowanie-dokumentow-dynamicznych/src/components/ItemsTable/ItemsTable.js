import React, { useState } from 'react'
import './ItemsTable.css';
import TableRow from './TableRow'
import { sortBy } from './helpers';

export const ItemsTable = ({items, changeItemsOrder}) => {
  const [productAttributeAsc, setProductAttributeAsc] = useState(true);

  return (
    <div className="divTable" styleName="width: 9%;" >
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