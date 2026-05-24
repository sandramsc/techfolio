/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from 'react';
import EmptyBasket from '../../../../assets/img/empty_cart.png';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
    h1{
      font-family: "Urbanist";
      font-size: 16px;
      line-height: 26px;
      color: #26282a;
      font-weight: 700;
    }
    h2{
      font-family: "Urbanist";
      font-size: 16px;
      line-height: 26px;
      color: #26282a;
      font-weight: 500;
    }
`;
const Empty = styled.div`
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #26282a;
  text-align: center;
  margin-bottom: 20px;
`;

export class Header extends Component {
  render(){
    const {length} = this.props;
   
    return(
      <>
      <Main>
      <h1>My Bag.&nbsp;</h1>
          <h2>{length + " items"}</h2>
      </Main>
      {length === 0 ? (
          <Empty>YOUR CART IS EMPTY
          <div>
          <img src={EmptyBasket} alt="empty basket img"/>
          </div>
          </Empty>
      ) : ("")
    }
      </>
    );
  }
}

export default Header;