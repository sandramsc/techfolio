/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import MBItemQnty from './MBItemQnty';
import MBItemAttr from './MBItemAttr';

const Container = styled.div`
  margin: 20px 0px;
  display: flex;
`;
const MBImg = styled.div`
  width: 120px;
    img{
      width: 100px;
      height: 125px;
      object-fit: fill;
    }
`;
const Info = styled.div`
  width: 170px;
    h3{
      font-family: "Urbanist";
      font-weight: 300;
      font-size: 16px;
      line-height: 26px;
      color: #26282a;
      margin: 0px;
    }
    p{
      font-family: "Urbanist";
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #26282a;
      margin: 0px;
    }
`;

export class MBItem extends Component {
  constructor(props){
    super(props);
    this.mbImg=React.createRef();
}
  render() {
    const { shownCurrency, idx, item, plusQnty, minusQnty } = this.props;
    const { product, qnty } = item;
    const { brand, name, attributes, chosenAttributes, gallery, prices } = product;

    let price = prices.find((due)=> { return due.currency.label === shownCurrency})
    
    return(
      <Container>
        <Info>
        <h3>{brand}</h3>
        <h3>{name}</h3>
        <p>{price.currency.symbol + " " + price.amount}</p>
        <div>
        {attributes.map((attribute, attrIdx)=> {
            return(
              <MBItemAttr 
              attribute={attribute}
              attrIdx={attrIdx}
              chosenAttributes={chosenAttributes}
              key={attribute.id} />
            );
        })}
        </div>
        </Info>
        <MBItemQnty 
              idx={idx}
              plusQnty={plusQnty}
              minusQnty={minusQnty}
              qnty={qnty} />
        <MBImg>
          <img ref={this.mbImg} src={gallery[0]} alt="" />
        </MBImg>
      </Container>
    );
  }
}

export default MBItem;