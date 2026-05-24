/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
import React, { Component } from "react";
import styled from 'styled-components';
import MinusIcon from '../../../assets/icons/minus_icon';
import PlusIcon from '../../../assets/icons/plus_icon';

const Container = styled.div`
  width: 45px;
  height: 170px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: "Urbanist";
    font-weight: 600;
    font-size: 18px;
    color: #26282a;
    margin-right: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;
    }
`;
const Button = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #26282a;
  &:hover{
    background: #cdf0d2;
    cursor: pointer;
  }
  &:active{
    background: #9adfa6;
  }
`;

export class ItemQnty extends Component {
    render() {
      const { idx, qnty, plusQnty, minusQnty} = this.props;
        return(
          <Container>
            <Button onClick={() => plusQnty(idx) }>
              <PlusIcon />
            </Button>
            <p>{qnty}</p>
            <Button onClick={() => minusQnty(idx) } >
              <MinusIcon />
            </Button>   
          </Container>
      );
    }
}

export default ItemQnty;
