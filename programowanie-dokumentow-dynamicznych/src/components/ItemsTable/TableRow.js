import React from 'react'

export const TableRow = ({productName, productId, nettoValue, vatValue, bruttoValue, category, itemOptions, itemRating, itemIcon}) => {
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
          <img src={itemIcon} alt="Product"/>
        </div>
    </div>
  )
}

export default TableRow