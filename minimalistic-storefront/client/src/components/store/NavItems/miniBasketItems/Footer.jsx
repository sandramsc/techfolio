/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MBSum = styled.div.attrs(props => ({
  className: props.className,
}))`
    display: flex;
    justify-content: space-between;
    font-family: "Urbanist";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 20px;
      p{
        font-weight: 700;
      }
`;
const Button = styled.div.attrs(props => ({
  className: props.className,
}))`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content:center;

      & .viewBag {
          width: 138px;
          height: 40px;
          padding: 12px 22px;
          font-family: "Urbanist";
          font-weight: 600;
          font-size: 14px;
          line-height: 14px;
          background-color: white;
          border: 1px solid #26282a;
        &:hover{
          background-color: #5ece7b;
          border: 0px;
          color: white;
          cursor: pointer;
        }
        &:active{
          background: #9adfa6;
        }
      }
        & .checkout{
            width: 138px;
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
          background-color: #5ece7b;
          cursor: pointer;
          color: black;
        }
        &:active{
          background: #9adfa6;
          border: 0px;
  
        }
    }
`;

export class Footer extends Component {
  render(){
    const {setViewMB, length, sumTotal} = this.props;
    if (length === 0) return "";
    return(
      <div>
        <MBSum>
          <p>Total</p>
          <p>{sumTotal()}</p>
        </MBSum>
        <Button>
          <Link to="/basket" onClick={setViewMB}>
            <button className="viewBag">VIEW BAG</button>
          </Link>
          <Link to="/payment">
            <button className="checkout">CHECKOUT</button>
          </Link>
        </Button>
      </div>
    );
  }
}

export default Footer;