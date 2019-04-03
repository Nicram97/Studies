import React from 'react'
import { Dropdown } from 'react-bootstrap';

export const TableRow = ({ productName, productId, nettoValue, vatValue, bruttoValue, category, itemOptions, itemRating, itemIcon, itemsTable, changeItemsTable, setInEditMode, setUnlockEdit }) => {
  return (
    <div className="divTableRow">
      <div className="divTableCell">{productName}</div>
      <div className="divTableCell">{productId}</div>
      <div className="divTableCell">{nettoValue}</div>
      <div className="divTableCell">{vatValue}</div>
      <div className="divTableCell">{bruttoValue}</div>
      <div className="divTableCell">{category}</div>
      <div className="divTableCell">
        <ul className="mb-3 list-nopadding">
          {itemOptions.map((option, index) =>
            <li key={`option_${index}`}>{option}</li>
          )}

        </ul>
      </div>
      <div className="divTableCell">{itemRating}</div>
      <div className="divTableCell">
        <img src={itemIcon} alt="Product" />
      </div>
      <div className="divTableCell">
      <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
              <i className='fa fa-cog fa-3x'></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={() => { setInEditMode(productName); setUnlockEdit(true) }}>Edytuj</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={() => {
                const newItemsTable = itemsTable.filter(item => item.productName !== productName && item)
                changeItemsTable(newItemsTable);
              }}>Usuń</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
      </div>
    </div>
  )
}

export default TableRow