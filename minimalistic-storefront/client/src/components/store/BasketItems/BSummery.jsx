/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Container = styled.div`
  padding: 18px 0px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 10;
`;
const BTax = styled.div`
  display: flex;
  gap: 10px;
  font-size:18px;
  margin-bottom:3px;
`;
const BSum= styled.div`
  display: flex;
  gap: 10px;
  font-size:18px;
  margin-bottom:10px;
`;
const BQnty = styled.div`
  display: flex;
  gap: 10px;
  font-size:18px;
  margin-bottom:3px;
`;
const Button = styled.div.attrs(props => ({
    className: props.className,
  }))`
    display: flex;
  
    & .order{
            width: 205px;
            height: 40px;
            padding: 12px 22px;
            font-family: "Urbanist";
            font-weight: 600;
            font-size: 14px;
            line-height: 14px;
            background-color: #5ece7b;
            border: 0px;
            color: white;
      &:hover{
            background: #3fa35a;
            cursor: pointer;
            border:1px solid #cdf0d2;
          }
      &:active{
            background: #3fa35a;
            color: #26282a;
          }
    }
`;

export class BSummery extends Component {

    render() {
        const { length, order, sumTotal, taxSum, sumQnty } = this.props;
        if (length === 0 ? "" : "");
      return(
        <Container>
          <BTax>
          <p>Tax 21%: </p>
          <p><strong>{taxSum()}</strong></p>
          </BTax>

          <BQnty>
          <p>Quantity: </p>
          <p><strong>{sumQnty()}</strong></p>
          </BQnty>
            
          <BSum>
          <p>Total: </p>
          <p><strong>{sumTotal()}</strong></p>
          </BSum>

        <Button>
          <Link to ="/" onClick={order}>
            <button className="order" onClick={() => {alert
              ('Thank you for shopping at Storefront!')}}>ORDER</button>
          </Link>
        </Button>
        </Container>
    );      
  }
}

export default BSummery;