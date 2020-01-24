import React from 'react';

var Item = ({sellerName, itemDesc, itemPrice}) => {

  return(
    <div className="product">
      <div className="seller">{sellerName}</div>
      <div className="desc">{itemDesc}</div>
      <div className="price">{`$${itemPrice}.00`}</div>
    </div>
  );

}

export default Item;