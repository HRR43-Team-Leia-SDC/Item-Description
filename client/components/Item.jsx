import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';


const StyledText = styled.div`
  color: palevioletred;
`;

const Item = ({ sellerName, itemDesc, itemPrice }) => (
  <div className="product">
    {/* <div className="seller">{sellerName}</div> */}
    <StyledText>{sellerName}</StyledText>
    <div className="desc">{itemDesc}</div>
    <div className="price">{`$${itemPrice}.00`}</div>
    <div>
      <AddToCart />
    </div>
  </div>
);

export default Item;
