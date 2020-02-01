import React from 'react';
import styled from 'styled-components';
import imgSeller from './assets/etsy_seller.png';
import imgPin from './assets/etsy_pin.png';

const FlexRow = styled.div`
display: flex;
justify-content: flext-start;
`;
const Avatar = styled.img`
content: url(${imgSeller});
width: 75px;
height: 70px;
margin-right: 5px;
padding-bottom: 6px;
`;
const Pin = styled.img`
content: url(${imgPin});
padding-top: 3px;
width: 14px;
height: 15px;
margin-right: 5px;
`;
const MeetSellerFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
margin-right: 5px;
padding-top: 6px;
padding-bottom: 6px;
`;
const SellerFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weight: 500;
color: rgb(51, 51, 51);
padding-top: 15px;
`;
const ResponseFont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
color: rgb(51, 51, 51);
padding-top: 8px;
`;
const Locfont = styled.div`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 13px;
color: #757575;
padding-top: 3px;
`;

const SellerButton = styled.button`
border: none;
padding: 0;
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
text-decoration: underline;
cursor: pointer;
`;
const MessageButton = styled.button`
font-family: "Graphik Webfont",-apple-system,BlinkMacSystemFont,"Roboto","Droid Sans","Segoe UI","Helvetica",Arial,sans-serif;
font-size: 14px;
font-weigth: 500;
background-color: #f9f9f7;
border-color: rgba(0, 0, 0, 0.2);
color: #222;
:hover {
  background-color: rgb(0,0,0, 0.1);

  }
`;

const MeetSeller = ({ sellerName, shippingLoc }) => {
  return (
    <div>
      <FlexRow>
        <MeetSellerFont>
          Meet
        </MeetSellerFont>
        <SellerButton>
          {sellerName}
        </SellerButton>
      </FlexRow>
      <FlexRow>
        <Avatar />
        <SellerFont>
          {sellerName}
          <FlexRow>
            <Pin />
            <Locfont>
              {`${shippingLoc.city}, ${shippingLoc.country}`}
            </Locfont>
          </FlexRow>
        </SellerFont>
      </FlexRow>
      <MessageButton>{`Message ${sellerName}`}</MessageButton>
      <ResponseFont>This seller usually responds within <b>a few hours.</b></ResponseFont>
    </div>
  );
};

export default MeetSeller;
